const userModel = require("../models/userModel")
const projectModel = require("../models/projectModel")



exports.createProject = async (req, res) => {
    try {
        const newProject = new projectModel(req.body)
        if(req.file){
            if(req.multerError){
                throw {errorUpload:"le fichier n'est pas valide"}
            }
            req.body.image = req.file.filename
            newProject.image = req.file.filename
        }
        newProject.validateSync()
        await newProject.save()
        res.redirect("/dashboard")


    } catch (error) {

        res.redirect("/dashboard")

    }
}

exports.deleteProject = async (req, res) => {
    try {
        await projectModel.deleteOne({ _id: req.params.projectid })
        res.redirect("/dashboard")
    } catch (error) {
        console.log(error);
        res.render("admin/dashboard.twig")

    }
}
exports.updateProject = async (req, res) => {
    try {
        const updateProject = await projectModel.findById(req.params.projectid)
   
     if(!updateProject){
        throw {error:"projet introuvalble"}
     }
        res.render("admin/updateProjectForm.twig",
            {
                project: updateProject,

            })
    } catch (error) {
        res.render("admin/dashboard.twig",
            {

            })
    }
}
exports.updatedProject = async (req,res) =>{
    try {
        if(req.file){
            if(req.multerError){
                throw {errorUpload:"le fichier n'est pas valide"}
            }
            req.body.image = req.file.filename
        }
    await projectModel.updateOne({_id: req.params.projectid},req.body)
        res.redirect("/dashboard")
        
    } catch (error) {
        res.render('admin/dashboard.twig',
        {
            errorDelete: "probleme survenue"
    })
}
}

// exports.validUpdate =async(req, res) =>{
//     try {
//         const validUpdate = await 
//     } catch (error) {
        
//     }
// }