const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "le nom est requis"]
    }
})
const projectModel = mongoose.model('Pojects', projectSchema)