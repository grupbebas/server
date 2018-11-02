const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news');
const NewsAPI = require('newsapi');

router.get('/', newsController.getHighlight);
router.get('/:category', newsController.getNewsByCategory)
router.get('/search/:query', newsController.getNewsByQuery)
router.get('/read/:title', newsController.getNewsByTitle)

module.exports = router;