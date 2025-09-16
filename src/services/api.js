const API_BASE_URL = 'http://localhost:5000/api';

// Get auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

// Set auth token in localStorage
const setAuthToken = (token) => {
  localStorage.setItem('authToken', token);
};

// Remove auth token from localStorage
const removeAuthToken = () => {
  localStorage.removeItem('authToken');
};

// API request helper with auth
const apiRequest = async (endpoint, options = {}) => {
  const token = getAuthToken();
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...options,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'API request failed');
  }

  return data;
};

// Auth API
export const authAPI = {
  signup: async (email, password) => {
    const data = await apiRequest('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    if (data.token) {
      setAuthToken(data.token);
    }
    return data;
  },

  signin: async (email, password) => {
    const data = await apiRequest('/auth/signin', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    if (data.token) {
      setAuthToken(data.token);
    }
    return data;
  },

  logout: () => {
    removeAuthToken();
  },

  isAuthenticated: () => {
    return !!getAuthToken();
  },
};

// Profile API
export const profileAPI = {
  updateProfile: async (profileData) => {
    return await apiRequest('/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
  },

  getProfile: async () => {
    return await apiRequest('/profile');
  },
};

// Aptitude Test API
export const aptitudeAPI = {
  submitResults: async (answers, suggestedStream, personalityType) => {
    return await apiRequest('/aptitude/submit', {
      method: 'POST',
      body: JSON.stringify({ answers, suggestedStream, personalityType }),
    });
  },
};

// College API
export const collegeAPI = {
  getColleges: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    return await apiRequest(`/colleges${queryParams ? `?${queryParams}` : ''}`);
  },

  addCollege: async (collegeData) => {
    return await apiRequest('/colleges', {
      method: 'POST',
      body: JSON.stringify(collegeData),
    });
  },
};

// Scholarship API
export const scholarshipAPI = {
  getScholarships: async () => {
    return await apiRequest('/scholarships');
  },

  addScholarship: async (scholarshipData) => {
    return await apiRequest('/scholarships', {
      method: 'POST',
      body: JSON.stringify(scholarshipData),
    });
  },
};