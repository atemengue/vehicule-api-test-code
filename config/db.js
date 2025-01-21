import mongoose from 'mongoose';
const uri = process.env.DB_URL;

// connexion
const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection error", error);
  }
}


export default connectDB;