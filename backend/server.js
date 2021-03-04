import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import houses from './data/houses.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/houses', (req, res) => {
  res.json(houses);
});

app.get('/api/houses/:id', (req, res) => {
  const house = houses.find((p) => p._id == req.params.id);
  res.json(house);
});

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
