const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    // Firebase UID (this will be used for identifying users)
    firebaseUid: { type: String, required: true, unique: true },

    // User's profile information
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },

    // Additional user info like phone number, etc.
    phoneNumber: { type: String },
    profilePicture: { type: String }, // URL to profile picture (if any)

    // Resume history (each user will have multiple resumes)
    resumes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resume' // Reference to Resume collection
      }
    ],

    // Date of account creation
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
module.exports = User;


