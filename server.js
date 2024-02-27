const express = require ('express')
const mongoose = require('mongoose')
const portfolioRouter = require('./router/portfolioRouter')
const userRouter = require('./router/userRouter')

const app = express()
app.use(userRouter)
app.use(portfolioRouter)
app.use(express.static("./assets"))

app.listen(3000, (err)=>{
    console.log(err ? err : "La connexion au serveur est établie"); 
})

mongoose.connect("mongodb://localhost:27017")