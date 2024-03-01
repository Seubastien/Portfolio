const userModel = require('../models/userModel')
const bcrypt = require('bcrypt') 
// exports.createUser = async (req,res)=>{
//     try {
//         let user = {
//             mail:"tartampion@gmail.com", 
//             password: await bcrypt.hash("", 10)
//         }                           
//         const newUser = new userModel(user)
//         newUser.save()
//         res.json("Utilisateur à bien été créé")

//     } catch (error) {
//         res.json(error.message)
//     }
// }

exports.findUsers = async (req,res) =>{
    try {
        const getUsers = await userModel.find()
        res.json(getUsers)
        
        
    } catch (error) {
        res.json(error.message)
    }
}