
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'paramu'
});
 
connection.connect();
 
connection.query('SELECT * from `student`', function (err, rows, results) {
  if (!err) 
  console.log('The solution is: ', rows);
else
  console.log("Error while performing query.");
});
 
connection.end();
