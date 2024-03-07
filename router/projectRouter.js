const projectRouter = require('express').Router()
const projectController = require('../controllers/projectController')
const authguard = require('../services/authguard')
const multer = require('../services/multer-config')


projectRouter.post('/dashboard', multer.single('image'), authguard, projectController.createProject)
projectRouter.get('/deleteproject/:projectid', authguard, projectController.deleteProject)
projectRouter.get('/updateproject/:projectid', authguard, projectController.updateProject)
projectRouter.post('/updateproject/:projectid',multer.single('image'), authguard, projectController.updatedProject)



module.exports = projectRouter   