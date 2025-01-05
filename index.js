import mongoose from 'mongoose';
import app from './app.js';
const uri = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.PASSWORD_USERNAME}@cluster0.bvrkq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
  }
}

app.listen(3000, () => {
  console.info('App is running on port 3000');
});

connect();