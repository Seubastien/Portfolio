const loginRouter = require('express').Router()
const loginController = require('../controllers/loginController')
const authguard = require('../services/authguard')


loginRouter.get('/login', loginController.displayLogin)
loginRouter.post('/login',loginController.validLogin)
loginRouter.get('/dashboard', authguard, loginController.displayDashboard)//pensr à remettre austgaurad

module.exports = loginRouter