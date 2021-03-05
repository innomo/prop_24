import asyncHandler from 'express-async-handler';
import House from '../models/houseModel.js';

// @desc    Fetch all houses
// @route   GET /api/houses
// @access  Public
const getHouses = asyncHandler(async (req, res) => {
  const houses = await House.find({});

  res.json(houses);
});

// @desc    Fetch single house
// @route   GET /api/houses/:id
// @access  Public
const getHouseById = asyncHandler(async (req, res) => {
  const house = await House.findById(req.params.id);

  if (house) {
    res.json(house);
  } else {
    res.status(404);
    throw new Error('House not found');
  }
});

export { getHouses, getHouseById };
