//server.js
var bookstore = require('./bookstore');
var port = process.env.PORT || 3001;

var server = bookstore.listen(port, function() {
  console.log('Express server listening on port ' + port);
});