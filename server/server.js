import express from 'express';
import mongoose from 'mongoose';

const PORT = 4000;
const app = express();

mongoose
  .connect(
    'mongodb+srv://rahulraj90:Admin123@expensor-app.qihb9hj.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => console.log('MongoDB connected successfully!'))
  .catch((err) => console.error(err));

app.get('/', (req, res) => {
  res.send(`Server started at PORT: ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});
