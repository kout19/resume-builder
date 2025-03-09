const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const url=process.env.MONGO_URL;
const connectDB=async()=>{
try{
await mongoose.connect(url,{
useNewUrlParser: true,
useUnifiedTopology: true,
});
console.log("MongoDB connected");
}catch(error){
console.log("MongoDB connection failed", error);
process.exit(1);
}
}

module.exports =connectDB;
