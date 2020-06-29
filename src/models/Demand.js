const mongoose = require('../database/mongoose')

const DemandSchema = require('../schemas/DemandSchema')
const { query } = require('express')

DemandSchema.statics.createDemand = async function(data) {

    const { point, found, areas, query } = data

    const demand = new Demand({

        point: point,
        query: query,
        found: found,
        areas: areas,

    })

    const savedDemand = await demand.save()

    return savedDemand

  }

const Demand = mongoose.model('Demand', DemandSchema, 'demands')

module.exports = Demand