const express = require('express')
const app = express()
const port = process.env.PORT || 3333
const routes = require('./routes')
const cors = require('cors')

app.use(express.json());
app.use(cors())
app.use(routes)

app.listen(port, () => {
    console.log('On ' + port)
})