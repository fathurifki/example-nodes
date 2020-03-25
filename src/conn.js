var mysql = require('mysql');

var con = mysql.createConnection({
    host: "10.200.23.172",
    user: "cilsy",
    password: "cilsy",
    database: "nodejs_api"
})

con.connect(function(err){
    if(err) throw err;
})

module.exports = con;