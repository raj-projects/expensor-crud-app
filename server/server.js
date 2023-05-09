import express from 'express';
import mongoose from 'mongoose';

const PORT = 4000;
const app = express();

// MongoDb connection
await mongoose.connect(
  'mongodb+srv://rahulraj90:Admin123@expensor-app.qihb9hj.mongodb.net/?retryWrites=true&w=majority'
);
console.log('MongoDB connected successfully!');

app.get('/', (req, res) => {
  res.send(`Server started at PORT: ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});
