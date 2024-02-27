const portfolioRouter = require('express').Router()
const portfolioController = require('../controllers/portfolioController')



portfolioRouter.get('/portfolio', portfolioController.findPortfolio)

module.exports = portfolioRouter    