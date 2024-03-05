const userModel = require("../models/userModel")
const projectModel = require("../models/projectModel")
const bcrypt = require('bcrypt')
const session = require('express-session')
exports.displayLogin = (req, res) => {
    try {
        res.render("./admin/index.twig"), {

        }
    } catch (error) {
        res.send(error)
    }
}
exports.validLogin = async (req, res) => {
    try {
        let user = await userModel.findOne({ email: req.body.mail })
        if (user) {
            if (await bcrypt.compare(req.body.password, user.password)) {
                req.session.user = user._id
                res.redirect('/dashboard')
            } else {
                throw { password: "Mauvais mot de passe" }
            }
        } else {
            throw { email: "cet utilisateur n'est pas enregistré" }
        }
    } catch (error) {
        res.render('admin/index.twig',

            {

            })
    }
}

exports.displayDashboard = async (req, res) => {
    try {
        const projects = await projectModel.find()
        res.render("./admin/dashboard.twig", {
            projects: projects
        })
    } catch (error) {
        res.send(error)
    }
}


