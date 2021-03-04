import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import House from '../models/houseModel.js';

// @desc    Fetch all houses
// @route   GET /api/houses
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const houses = await House.find({});

    res.json(houses);
  })
);

// @desc    Fetch single house
// @route   GET /api/houses/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const house = await House.findById(req.params.id);

    if (house) {
      res.json(house);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  })
);

export default router;
