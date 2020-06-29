const Demand = require("../models/Demand")
const getGeo = require('../geoCoder')
const geolib = require('geolib')
const areas = require('../../areas.json')

module.exports = {


    async execute(req, res) {

        const { address } = req.body

        const geo = await getGeo(address) // Pega coordenadas

        const point = {

            latitude: geo[0].latitude,
            longitude: geo[0].longitude

        }

        const foundAreas = []

        for (const area of areas) {

            const included = geolib.isPointInPolygon(point, area.polygon.coordinates[0])

            if (included) foundAreas.push(area.name) 

        }


        res.send(foundAreas)


    }




}