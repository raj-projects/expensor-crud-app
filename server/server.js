import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import TransactionsApi from './routes/TransactionsApi.js';
import connect from './database/mongodb.js';

const PORT = 4000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send(`Server started at PORT: ${PORT}`);
});

app.use('/transaction', TransactionsApi);

// MongoDb connection
await connect();

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});
