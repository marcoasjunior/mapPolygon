const express = require('express')
const app = express()
const port = process.env.PORT || 3333

app.use(express.json());
app.use(cors())

app.listen(port, () => {
    console.log('On ' + port)
})