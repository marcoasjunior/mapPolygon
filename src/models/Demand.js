const mongoose = require('../mongoose')

const DemandSchema = require('../schemas/DemandSchema')

const Demand = mongoose.model('Demand', DemandSchema, 'demands')

module.exports = Demand