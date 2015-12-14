var express = require('express');
var router = express.Router();

var Book = require('../models/book');


router.get('/', function (req,res) {
  Book.find({}, function (err, books) {
    res.status(err ? 400:200).send(err || books);
  });
});

router.post('/', function (req, res) {
  console.log(req.body);
  var book = new Book(req.body);
  book.save(function (err, savedBook) {
    res.status(err ? 400: 200).send(err || savedBook);
  });
});
//
//
// router.post('/delete', function (req, res) {
//   Book.find({bookName:req.body.bookName}).remove(function (err, book) {
//     // body...
//   }).exec();
// });
//

module.exports = router;