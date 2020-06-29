const express = require('express')
const routes = express.Router()
const DemandController = require('../controllers/DemandController')

routes.post('/demand', DemandController.execute)


module.exports = routes