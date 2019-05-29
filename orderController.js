//OrderController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Order = require('./order');

//CREATES AN ORDER
router.post('/', function (req, res) {
    Order.create({
		customer_id: req.body.customer_id,
		title: req.body.title,
		quantity: req.body.quantity
        }, 
        function (err, order) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(order);
        });
});

//GETS AN ORDER BY ID
router.get('/:id', function (req, res) {
    Order.findById(req.params.id, function (err, order) {
        if (err) return res.status(500).send("There was a problem finding the order.");
        if (!order) return res.status(404).send("No Order found.");
        res.status(200).send(order);
    });
});

//GETS ALL ORDERS
router.get('/', function (req, res) {
    Order.find({}, function (err, order) {
        if (err) return res.status(500).send("There was a problem finding the order.");
        res.status(200).send(order);
    });
});

//DELETES AN ORDER
router.delete('/:id', function (req, res) {
    Order.findByIdAndRemove(req.params.id, function (err, order) {
        if (err) return res.status(500).send("There was a problem deleting the order.");
        res.status(200).send("Order "+ order.name +" was deleted.");
    });
});

//UPDATES AN Order
router.put('/:id', function (req, res) {
    Order.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, order) {
        if (err) return res.status(500).send("There was a problem updating the Order.");
        res.status(200).send(order);
    });
});

module.exports = router;
