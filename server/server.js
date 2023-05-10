import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import Transaction from './models/Transaction.js'

const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

// MongoDb connection
await mongoose.connect(
  'mongodb+srv://rahulraj90:Admin123@expensor-app.qihb9hj.mongodb.net/?retryWrites=true&w=majority'
);
console.log('MongoDB connected successfully!');

app.get('/', (req, res) => {
  res.send(`Server started at PORT: ${PORT}`);
});

app.get('/transaction', async (req, res) => {
  const transaction = await Transaction.find({}).sort({ createdAt: -1 });
  res.json({ data: transaction });
});

app.post('/transaction', async (req, res) => {
  const { amount, description, date } = req.body;
  const transaction = new Transaction({
    amount,
    description,
    date
  });
  await transaction.save();
  res.json({ message: 'Success' });
});

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});
