const route = require('express').Router()
const PlaceController = require('../controllers/PlaceController')
// const isLogin = require('../middleware/isLogin')

route.get('/:place/:lat/:lng', PlaceController.getNearbyPlace)

module.exports = route