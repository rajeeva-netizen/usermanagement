var express = require('express')
var app = express()
var port = 5000

app.get("/", (req, res)=>{
    res.send('hello')
})

app.listen(port, ()=>{
    console.log('server running on port 5000')
})