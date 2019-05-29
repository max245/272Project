//inventoryController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Inventory = require('./inventory');

//CREATES NEW INVENTORY INFORMATION
router.post('/', function (req, res) {
    Inventory.create({
            book_id : req.body.book_id,
            title : req.body.title,
			quantity : req.body.quantity
        }, 
        function (err, inventory) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(inventory);
        });
});

//UPDATES AN INVENTORY IN THE DATABASE
router.put('/:id', function (req, res) {
    Inventory.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, inventory) {
        if (err) return res.status(500).send("There was a problem updating the inventory.");
        res.status(200).send(inventory);
    });
});

//RETURNS ALL THE INVENTORY INFORMATION IN THE DATABASE
router.get('/', function (req, res) {
    Inventory.find({}, function (err, inventory) {
        if (err) return res.status(500).send("There was a problem finding inventory.");
        res.status(200).send(inventory);
    });
});

//GETS AN ITEM IN THE INVENTORY BY ID
router.get('/:id', function (req, res) {
    Inventory.findById(req.params.id, function (err, inventory) {
        if (err) return res.status(500).send("There was a problem finding the item in inventory.");
        if (!inventory) return res.status(404).send("No Item found.");
        res.status(200).send(inventory);
    });
});

//DELETES AN INVENTORY ENTRY
router.delete('/:id', function (req, res) {
    Inventory.findByIdAndRemove(req.params.id, function (err, inventory) {
        if (err) return res.status(500).send("There was a problem deleting the inventory.");
        res.status(200).send("Inventory "+ inventory.name +" was deleted.");
    });
});

module.exports = router;
