const projectModel = require('../models/projectModel')
exports.findPortfolio = async (req, res) => {
    try {
        const projects = await projectModel.find()
       res.render("./main/index.twig", {
        projects: projects // le premier projects est la clé que l'on défini ici.

        })
    } catch (error) {
        res.send(error)
    }
}