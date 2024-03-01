const loginRouter = require('express').Router()
const loginController = require('../controllers/loginController')


loginRouter.get('/login', loginController.displayLogin)
loginRouter.post('/login',loginController.validLogin)


module.exports = loginRouter