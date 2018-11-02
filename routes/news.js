const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('e135cfe3ae9e490892460c6a9dc7783c');

router.get('/', newsController.getHighlight);
router.get('/:category', newsController.getNewsByCategory)
router.get('/search/:query', newsController.getNewsByQuery)
router.get('/read/:title', newsController.getNewsByTitle)

module.exports = router;