const route = require('express').Router()
const MatrixController = require('../controllers/MatrixController')
// const isLogin = require('../middleware/isLogin')

route.post('/', MatrixController.getDistance)

module.exports = route