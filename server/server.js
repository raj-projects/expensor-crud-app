import express from 'express';

const PORT = 4000;
const app = express();

app.get('/', (req, res) => {
    res.send(`Server started at PORT: ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Server running at PORT: ${PORT}`);
});

