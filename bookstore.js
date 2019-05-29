//bookstore.js
var express = require('express');
var bookstore = express();
var db = require('./db');

bookstore.use(express.static('public'));

var bookController = require('./bookController');
bookstore.use('/book', bookController);
var customerController = require('./customerController');
bookstore.use('/customer', customerController);
var inventoryController = require('./inventoryController');
bookstore.use('/inventory', inventoryController);
var orderController = require('./orderController');
bookstore.use('/order', orderController);

module.exports = bookstore;
