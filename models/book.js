'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Book;

var bookSchema = new Schema({
  title: { type: String }, 
  author: { type: String },
  lastPrintingYear: { type: Number }
});

Book = mongoose.model('Book', bookSchema);

module.exports = Book;
