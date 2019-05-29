//Order.js
var mongoose = require('mongoose');  
var OrderSchema = new mongoose.Schema({
	customer_id: Number,
	title: String,
	quantity: Number
	//Add date for the order
});
mongoose.model('Order', OrderSchema);

module.exports = mongoose.model('Order');