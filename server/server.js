const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/career-website', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: {
    name: String,
    age: Number,
    qualification: String,
    interests: String,
    careerGoal: String,
    caste: String,
    income: Number,
    stream: String,
    phone: String,
    aadhar: String,
    marks: String,
    subjects10: String,
    subjects12: String,
    interested10: String,
    interested12: String,
  },
  aptitudeResults: {
    suggestedStream: String,
    personalityType: String,
    answers: Object,
    completedAt: Date,
  },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

// College Schema
const collegeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  district: String,
  courses: [String],
  cutoff: String,
  facilities: [String],
  hasHostel: Boolean,
  medium: String,
  stream: String,
  mapUrl: String,
  createdAt: { type: Date, default: Date.now },
});

const College = mongoose.model('College', collegeSchema);

// Scholarship Schema
const scholarshipSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: String,
  eligibility: String,
  lastDate: Date,
  description: String,
  category: String,
  createdAt: { type: Date, default: Date.now },
});

const Scholarship = mongoose.model('Scholarship', scholarshipSchema);

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Auth Routes
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user
    const user = new User({
      email,
      password: hashedPassword,
    });
    
    await user.save();
    
    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    
    res.status(201).json({ 
      message: 'User created successfully',
      token,
      user: { id: user._id, email: user.email }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.post('/api/auth/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    
    res.json({ 
      message: 'Login successful',
      token,
      user: { id: user._id, email: user.email, profile: user.profile }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Profile Routes
app.put('/api/profile', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const profileData = req.body;
    
    const user = await User.findByIdAndUpdate(
      userId,
      { $set: { profile: profileData } },
      { new: true }
    );
    
    res.json({ message: 'Profile updated successfully', profile: user.profile });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.get('/api/profile', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId).select('-password');
    
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Aptitude Test Routes
app.post('/api/aptitude/submit', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const { answers, suggestedStream, personalityType } = req.body;
    
    const user = await User.findByIdAndUpdate(
      userId,
      { 
        $set: { 
          aptitudeResults: {
            answers,
            suggestedStream,
            personalityType,
            completedAt: new Date()
          }
        }
      },
      { new: true }
    );
    
    res.json({ 
      message: 'Aptitude test results saved successfully',
      results: user.aptitudeResults
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// College Routes
app.get('/api/colleges', async (req, res) => {
  try {
    const { search, district, stream, medium, hostel } = req.query;
    let query = {};
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { courses: { $regex: search, $options: 'i' } }
      ];
    }
    
    if (district) query.district = district;
    if (stream) query.stream = stream;
    if (medium) query.medium = medium;
    if (hostel === 'true') query.hasHostel = true;
    
    const colleges = await College.find(query);
    res.json({ colleges });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.post('/api/colleges', authenticateToken, async (req, res) => {
  try {
    const college = new College(req.body);
    await college.save();
    res.status(201).json({ message: 'College added successfully', college });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Scholarship Routes
app.get('/api/scholarships', async (req, res) => {
  try {
    const scholarships = await Scholarship.find().sort({ lastDate: 1 });
    res.json({ scholarships });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.post('/api/scholarships', authenticateToken, async (req, res) => {
  try {
    const scholarship = new Scholarship(req.body);
    await scholarship.save();
    res.status(201).json({ message: 'Scholarship added successfully', scholarship });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});