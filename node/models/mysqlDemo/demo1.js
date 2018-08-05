var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'test'
});
 
connection.connect();
 
connection.query('insert into users values("2","ADMIN","123456","email@email.com")', 
	function (error, results, fields) {
	  if (error) throw error;
	  console.log('The solution is: ', results);
});
 
//  connection.query('SELECT * FROM `users`', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });
connection.end();