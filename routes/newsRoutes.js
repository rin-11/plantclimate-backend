const express = require('express');
const router = express.Router();
const { getAllNews, getNewsById } = require('../controllers/newsController');


// Route to get all news
router.get('/', getAllNews);


module.exports = router;
