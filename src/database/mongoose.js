const mongoose = require('mongoose')

const CONNECTION = process.env.NODE_ENV == 'test' ? process.env.MONGOURI_TEST : process.env.MONGOURI

mongoose.connect(CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

module.exports = mongoose