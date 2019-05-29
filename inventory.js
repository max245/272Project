//Inventory.js
var mongoose = require('mongoose');  
var InventorySchema = new mongoose.Schema({
	book_id: Number,
	title: String,
	quantity: Number
});
mongoose.model('Inventory', InventorySchema);

module.exports = mongoose.model('Inventory');