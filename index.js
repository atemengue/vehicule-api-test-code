import app from './app.js';
import connectDB from './config/db.js';


async function runDB() {
  await connectDB()
}
// connexion BD
runDB();


app.listen(3000, () => {
  console.log('Server us running on port 3000');
});