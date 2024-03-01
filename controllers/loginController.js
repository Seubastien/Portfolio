const userModel = require("../models/userModel")

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
        let user = await userModel.findOne({ email: req.body.email })
        if (user) {
            if (await bcryot.compare(req.body.password, user.password)) {
                req.session.user = user
                res.redirect('/dashboard')
            } else {
                throw { password: "Mauvais mot de passe" }

            }
        } else {
            throw { email: "cet utilisateur n'est pas enregistré" }
        }

    } catch (error) {
        res.render('./admin/index.twig',
    {

            })
    }
}


