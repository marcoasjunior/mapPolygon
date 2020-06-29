const mongoose = require('mongoose')

const CONNECTION = 'mongodb://root:123123123@desafiomap-shard-00-00-ajtcd.gcp.mongodb.net:27017,desafiomap-shard-00-01-ajtcd.gcp.mongodb.net:27017,desafiomap-shard-00-02-ajtcd.gcp.mongodb.net:27017/teste?ssl=true&replicaSet=desafioMap-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.connect(CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch((err) => console.log(err))

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

module.exports = mongoose