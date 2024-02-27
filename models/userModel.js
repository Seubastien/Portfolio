const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "le nom est requis"]
    },
    firstName: {
        type: String,
        required: [true, "le prenom est requis"]
    },
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