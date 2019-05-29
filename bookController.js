//bookController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Book = require('./book');

//CREATES A SINGLE BOOK
router.post('/', function (req, res) {
    Book.create({
            isbn : req.body.isbn,
            title : req.body.title,
			author : req.body.author,
			price : req.body.price,
			book_id: req.body.book_id
        }, 
        function (err, book) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(book);
        });
});

//GETS A BOOK BY ID
router.get('/:id', function (req, res) {
    Book.findById(req.params.id, function (err, book) {
        if (err) return res.status(500).send("There was a problem finding the book.");
        if (!book) return res.status(404).send("No book found.");
        res.status(200).send(book);
    });
});

//GETS ALL BOOKS
router.get('/', function (req, res) {
    Book.find({}, function (err, book) {
        if (err) return res.status(500).send("There was a problem finding the book.");
        res.status(200).send(book);
    });
});

//DELETES A BOOK
router.delete('/:id', function (req, res) {
    Book.findByIdAndRemove(req.params.id, function (err, book) {
        if (err) return res.status(500).send("There was a problem deleting the book.");
        res.status(200).send("Book "+ book.name +" was deleted.");
    });
});

//UPDATES A BOOK
router.put('/:id', function (req, res) {
    
    Book.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, book) {
        if (err) return res.status(500).send("There was a problem updating the book.");
        res.status(200).send(book);
    });
});

module.exports = router;
