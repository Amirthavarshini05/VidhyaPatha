const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/career-website', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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

// Sample data
const sampleColleges = [
  {
    name: "ABC Engineering College",
    address: "Chennai, Tamil Nadu",
    district: "Chennai",
    courses: ["CSE", "ECE", "MECH"],
    cutoff: "85%",
    facilities: ["Library", "Hostel", "WiFi"],
    hasHostel: true,
    medium: "English",
    stream: "Engineering",
    mapUrl: "https://maps.google.com",
  },
  {
    name: "XYZ Arts & Science College",
    address: "Coimbatore, Tamil Nadu",
    district: "Coimbatore",
    courses: ["B.Sc", "B.Com", "B.A"],
    cutoff: "75%",
    facilities: ["Hostel", "Sports", "Lab"],
    hasHostel: true,
    medium: "English",
    stream: "Arts",
    mapUrl: "https://maps.google.com",
  },
];

const sampleScholarships = [
  {
    title: "National Merit Scholarship",
    amount: "₹50,000",
    eligibility: "Class 12 Passed",
    lastDate: new Date("2025-10-15"),
    description: "Merit-based scholarship for outstanding students",
    category: "Merit",
  },
  {
    title: "State Govt Scholarship",
    amount: "₹30,000",
    eligibility: "Family Income < ₹2L",
    lastDate: new Date("2025-11-01"),
    description: "Need-based scholarship for economically disadvantaged students",
    category: "Need-based",
  },
  {
    title: "ST/SC Special Scholarship",
    amount: "₹40,000",
    eligibility: "Reserved Category",
    lastDate: new Date("2025-09-25"),
    description: "Special scholarship for SC/ST students",
    category: "Category-based",
  },
];

async function seedData() {
  try {
    // Clear existing data
    await College.deleteMany({});
    await Scholarship.deleteMany({});
    
    // Insert sample data
    await College.insertMany(sampleColleges);
    await Scholarship.insertMany(sampleScholarships);
    
    console.log('Sample data inserted successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
}

seedData();