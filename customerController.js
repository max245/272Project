//CustomerController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Customer = require('./customer');

//CREATES A NEW CUSTOMER
router.post('/', function (req, res) {
    Customer.create({
            name : req.body.name,
            email : req.body.email,
			address : req.body.address,
			customer_id : req.body.customer_id
        }, 
        function (err, customer) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(customer);
        });
});

//UPDATES A CUSTOMER
router.put('/:id', function (req, res) {
    Customer.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, customer) {
        if (err) return res.status(500).send("There was a problem updating the customer.");
        res.status(200).send(customer);
    });
});

//GETS A CUSTOMER BY ID
router.get('/:id', function (req, res) {
    Customer.findById(req.params.id, function (err, customer) {
        if (err) return res.status(500).send("There was a problem finding the customer.");
        if (!customer) return res.status(404).send("No Customer found.");
        res.status(200).send(customer);
    });
});

//DELETES A CUSTOMER
router.delete('/:id', function (req, res) {
    Customer.findByIdAndRemove(req.params.id, function (err, customer) {
        if (err) return res.status(500).send("There was a problem deleting the customer.");
        res.status(200).send("Customer "+ customer.name +" was deleted.");
    });
});


//RETURNS ALL THE CUSTOMERS IN THE DATABASE
router.get('/', function (req, res) {
    Customer.find({}, function (err, customer) {
        if (err) return res.status(500).send("There was a problem finding the customers.");
        res.status(200).send(customer);
    });
});

module.exports = router;
