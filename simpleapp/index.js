const express = require('express');
var app = express()


app.get('/', (req, res)=>{
    res.send('Hello Welcome')
})

app.listen(5000, ()=>{
    console.log("server running on 5000")
})