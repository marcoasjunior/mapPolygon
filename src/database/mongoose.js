const mongoose = require('mongoose')

const CONNECTION = 'mongodb+srv://root:123123123@desafiomap-ajtcd.gcp.mongodb.net/teste?retryWrites=true&w=majority'

mongoose.connect(CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

module.exports = mongoose