var express = require('express');
var router = express.Router();
const {create, login, getUser, loginGoogle} = require('../controllers/users')
const {isLogin, validGoogleToken} = require('../middlewares/auth')
const {registerWithGoogle} = require ('../helpers/index')

router.post('/', create)
router.get('/', isLogin, getUser)
router.post('/login', login)
router.post('/Glogin', validGoogleToken, registerWithGoogle, loginGoogle )

module.exports = router;
