const Books = require('./books');
const BooksController = require('./booksController');

const service = BooksController(Books);

module.exports = service;