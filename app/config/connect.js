// First you need to create a connection to the db
const express = require('express')
const app = express()
var mysql = require('mysql')
var con = mysql.createConnection({
  host: "107.170.36.112",
  user: "USERNAME",
  password: "PASSWORD",
  database: "users"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

// con.query('SELECT * FROM user',function(err,rows){
//   if(err) throw err;
//
//   // SHOWS ROWS IN CONSOLE
//   // console.log('Data received from Db:\n');
//   // console.log(rows);
// });

con.end(function(err) {

});

// app.get('/home',function(req,res){
//
//     //On request of this page initiating sql query. Assumes that the object initialization is done above.
//     con.query(
//     selectQuery,
//     function select(error, results, fields) {
//         if(error) {
//             console.log(error);
//             con.end();
//             //render the template with error to be alerted
//             res.render('home',{data:null,error:error});
//         }
//
//         if(results.length > 0) {
//             //console.log(results);
//             //render the template with fetched data
//             res.render('home',{data:results,error:null});
//         } else {
//             //console.log('No data');
//             //render the template with empty data alert
//             res.render('home',{data:null,error:"no data"});
//         }
//         con.end();
//     });
//
// });
