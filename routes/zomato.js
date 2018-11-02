var express = require('express');
var router = express.Router();
const {isLogin} = require('../middlewares/auth')
const {searchByLocation} = require('../controllers/zomato')

router.get('/:key', searchByLocation)

module.exports = router;