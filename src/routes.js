const express = require('express')
const routes = express.Router()
const DemandController = require('./controllers/DemandController')

routes.get('/demand/:address', DemandController.execute)


module.exports = routes