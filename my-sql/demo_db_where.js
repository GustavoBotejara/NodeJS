var msql = require('msql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'usernames',
    password: '',
    database: 'mydb'
});

con.connect(function(err) {
    if (err) throw err;
    console.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function(err, result) {
        if (err) throw err;
        console.log(result);
    });
});