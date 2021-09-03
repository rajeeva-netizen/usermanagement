var mysql = require('mysql2')

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'R@J5522a',
    database:'userdb'
})

connection.connect((err )=>{
    if(err) throw err
    console.log('connected')
})

module.exports = connection;