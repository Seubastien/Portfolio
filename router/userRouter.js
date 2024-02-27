const userRouter = require('express').Router()
const userController = require('../controllers/userController')

userRouter.get = ('/users', userController.findUsers)

module.exports = userRouter