var mongoose = require('mongoose');

let Schema = mongoose.Schema;

var BooksSchema = new Schema({
    titulo: {type: String, required: true},
    autor: {type: String, required: true},
    categoria: {type: String, required: true},
});

let Books = mongoose.model('Books', BooksSchema);

module.exports = Books;
