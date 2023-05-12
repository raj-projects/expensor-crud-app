import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import TransactionApi from './routes/TransactionsApi.js';

const PORT = 4000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send(`Server started at PORT: ${PORT}`);
});

app.use('/', TransactionApi);

// MongoDb connection
await mongoose.connect(
  'mongodb+srv://rahulraj90:Admin123@expensor-app.qihb9hj.mongodb.net/?retryWrites=true&w=majority'
);
console.log('MongoDB connected successfully!');

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});
