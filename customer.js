//Customer.js
var mongoose = require('mongoose');  
var CustomerSchema = new mongoose.Schema({
	name: String,
	email: String,
	address: String,
	customer_id: Number
});
mongoose.model('Customer', CustomerSchema);

module.exports = mongoose.model('Customer');