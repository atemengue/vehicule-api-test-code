import mongoose from 'mongoose';
const uri = `mongodb+srv://c:${process.env.DB_PASSWORD}@cluster0.ov70w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

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