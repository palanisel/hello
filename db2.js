var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'example.org',
  user     : 'root',
  password : '',
});

connection.connect(function(err) {
  // connected! (unless `err` is set)
var post  = {id: 1, title: 'Hello MySQL'};
var query = connection.query('INSERT INTO employee SET ?', post, function(err, result) {
  // Neat!
});
console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
});
