let mysql = require('mysql');

let con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

function query(sql, value, cb){
    con.connect(function(err){
       if(err){
           cb(err)
           return
       }
       console.log("Connected")
       con.query(sql, value, cb)
    });
}

function getUserByUsername(username){
    query("SELECT * FROM `users` WHERE `username` = ?", [username], (err, row)=> {
        if(err){
            return null;
        }
        return row;
    })
}

module.exports = {
    query,
    getUserByUsername
}