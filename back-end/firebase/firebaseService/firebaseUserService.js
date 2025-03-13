const admin = require("../firebaseConfig/firebaseConfig"); // Import Firebase config

// Function to list users
const listUsers = async () => {
  try {
    const userRecords = await admin.auth().listUsers(100);
    console.log("Successfully fetched users:", userRecords.users);
    return userRecords.users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

// Export the function
module.exports =  listUsers ;
