const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const portfolioRouter = require('./router/portfolioRouter')
const loginRouter = require('./router/loginRouter')
const projectRouter = require('./router/projectRouter')

const app = express()
app.use(express.json())
app.use(express.static("./assets"))
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: 'pouetpouet',
    resave: true,
    saveUninitialized: true,
}))
app.use(portfolioRouter)
app.use(loginRouter)
app.use(projectRouter)


app.listen(3000, (err) => {
    console.log(err ? err : "La connexion au serveur est établie");
})

mongoose.connect("mongodb://localhost:27017/portfolio")