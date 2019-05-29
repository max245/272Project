//Book.js
var mongoose = require('mongoose');  
var BookSchema = new mongoose.Schema({
	isbn: Number,
	title: String,
	author: String,
	price: Number,
	book_id: Number
});
mongoose.model('Book', BookSchema);

module.exports = mongoose.model('Book');