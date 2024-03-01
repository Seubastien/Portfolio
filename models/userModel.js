const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
   
    mail: {
        type: String,
        required: [true, "le mail est requis"]
    },
    password: {
        type:String,
        required: [true, "le mot de passe est requis"]
    }
})

const userModel = mongoose.model('Users', userSchema)
module.exports = userModel