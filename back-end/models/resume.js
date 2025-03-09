const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema(
  {
    // The user who created this resume
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },

    // Resume details
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String },
    phoneNumber: { type: String },
    address: { type: String },
    
    // Sections of the resume
    experience: [
      {
        jobTitle: { type: String },
        company: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
        description: { type: String }
      }
    ],
    
    education: [
      {
        degree: { type: String },
        school: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
        description: { type: String }
      }
    ],

    skills: [String], // List of skills (e.g., JavaScript, React, etc.)

    // Resume format and export options
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

const Resume = mongoose.model('Resume', resumeSchema);
module.exports = Resume;
