const express = require('express')
const PORT = process.env.PORT || 5000
// init express
const app = express()

// create endpoints / rouote handlers
app.get('/', ( req, res ) => {
    res.send('hello world')
})

app.get('/api/end-point', ( req, res ) => {
    res.send({
        blogOne:{
            ttitle: "the blog",
            body: "this is the body of the post, it has many words and is pleasnt to look at "
        }
    })
})


app.listen( PORT, () => console.log('server started on: port', PORT) )