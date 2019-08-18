const express = require('express')

// init express
const app = express()

// create endpoints / rouote handlers
app.get('', ( req, res ) => {
    res.send('hello world')
})

app.listen(5000)