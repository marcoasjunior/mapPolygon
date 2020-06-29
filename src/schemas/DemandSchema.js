const { Schema } = require('../database/mongoose')

const DemandSchema = new Schema({

    query: {
        type: String,
        require: true
    },

    point: {
        type: Array,
        require: true
    },

    found: {
        type: Boolean,
        require: true

    },

    areas: {
        type: Array,

    },


}, {
    timestamps: true,
    versionKey: false
})

module.exports = DemandSchema