const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "le nom est requis"]
    },
    url: {
        type: String,
        required: [true, "un lien url est requis"]
    },
    urlGithub: {
        type: String,
        required: [true, "un lien github est requis"]
    },
    image: {
        type: String,
        default: "icons8-css-50.png"
      
    }




})
const projectModel = mongoose.model('Pojects', projectSchema)
module.exports = projectModel