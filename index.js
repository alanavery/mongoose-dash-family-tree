const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/familyTree');

const db = mongoose.connection;

db.once('open', () => {
  console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});

db.on('error', (err) => {
  console.error(`Database error: ${err}`);
});

app.get('/', (req, res) => {
  res.send('Hello.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`The server is up and running on PORT: ${PORT}`);
});
