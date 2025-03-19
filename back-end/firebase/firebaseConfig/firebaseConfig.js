const admin = require("firebase-admin");
const fs=require('fs');
const path=require('path');
require("dotenv").config(); 
const serviceAccountPath=path.resolve(process.env.FIREBASE_SERVICE_ACCOUNT_PATH);
console.log("service account path:",serviceAccountPath);
if(!fs.existsSync(serviceAccountPath)){
  console.log("error firebase serviec file not found");
  process.exit(1);
}
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));
console.log("Loaded firebase credentials:", serviceAccount.project_id || "No Project ID found");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports= admin;