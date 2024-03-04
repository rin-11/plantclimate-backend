const express = require('express');
const router = express.Router();
const { getAllPlants, getPlantById, searchPlants } = require('../controllers/plantController');

// Route to search plants
router.get('/search', searchPlants);

// Route to get all plants
router.get('/', getAllPlants);

// Route to get a single plant by ID
router.get('/:id', getPlantById);

module.exports = router;
