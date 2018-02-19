var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/groceries');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('database connected');
})

var groceriesSchema = mongoose.Schema({
  name: String,
  quantity: Number
});

var GroceryItem = mongoose.model('GroceryItem', groceriesSchema);

// var kiwi = new GroceryItem({ name: 'kiwi', quantity: 7});

// kiwi.save((err, kiwi) => {
//   if (err) return console.error(err);
//   console.log('successfully saved ', kiwi)
// })


// **** ATTEMPT AT MYSQL, unable to create a connection
// here i need to setup a mysql database
// var mysql = require('mysql');

// var connection = mysql.createConnection({
//   user: 'david',
//   password: 'seidenberg',
//   database: 'groceries'
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('error connection: ' + err.stack);
//     return;
//   }

//   console.log('connected as id ' + connection.threadId);
// });

// connection.end();