const Demand = require("../models/Demand")
const getGeo = require('../geoCoder')

module.exports = {


    async execute(req, res) {

        const { address } = req.body

        const geo = await getGeo(address) // Pega coordenadas




        res.send(geo)


    }




}