const userModel = require('../models/userModel')

exports.findUsers = async (req,res) =>{
    try {
        const getUsers = await userModel.find()
        res.json(getUsers)
        
        
    } catch (error) {
        res.json(error.message)
    }
}