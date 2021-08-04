const express = require('express')
var app = express()
// const mysql = require('mysql2')
const con = require('./connection/db')
const port = 4000

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(function (req, res, next) {
   
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  
  //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    // Pass to next layer of middleware
    next();
  });

app.get('/', (req, res)=>{
    res.send('welcome_page')
})
// get all customers
app.get('/customers', (req, res)=>{
    // con.getConnection((err, connection)=>{
    //     if(err) throw err
            
        con.query('SELECT * FROM customer', (err, rows)=>{
            // connection.release()
            if(!err){
                res.send(rows)
                console.log(rows)
            }else{
                console.log(err)
            }
        })
    })
// })

app.get('/customer/:name', (req, res)=>{
    // con.getConnection((err, connection)=>{
    //     if(err) throw err
    const name = req.params.name
    console.log('rajeeva', name)

    const getquery = `select * from customer where name = 'rajeeva' `
        con.query(getquery, (err, rows)=>{
            // connection.release()
            if(!err){
                res.send(rows)
            }else{
                console.log(err)
            }
        })
    })

app.post('/newcustomer', async(req, res, next)=>{

    const params = req.body
    // const {name, Area, lunch, breakfast, dinner} = req.body
     const postquery = "INSERT INTO customer (name, Area, lunch, breakfast, dinner) VALUES (`${req.body.name}`)"
    con.query(params,(err, rows)=>{
        if(!err){
            res.send('new customer is added')
        }else{
            console.log(err)
            res.send(err)
        }
    })

    // try{
    //     res.json(await con.create(req.body));
    // }catch(err){
    //     console.log(err)
    //     next(err)
    // }
})
app.listen(port, ()=>{
    console.log(`server is running at port ${port}`)
})