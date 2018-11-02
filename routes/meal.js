const MealController = require('../controllers/meal.js');
const router = require('express').Router();

router.get('/search/:nameSearch', MealController.search);

module.exports = router;