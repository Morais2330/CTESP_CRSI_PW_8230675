const Books = require("./books");

function BooksController(BooksModel) {

    let controller = {
        create,
        findAll,
        findById,
        update,
        removeById
    };

    function update(id, books) {
        return new Promise(function (resolve, reject) {
            BookModel.findByIdAndUpdate(id, books)
                .then((updatedBook) => resolve(updatedBooks))
                .catch((err) => reject(err));
        });
    }

    function removeById(id) {
        return new Promise(function (resolve, reject) {
            BookModel.findByIdAndRemove(id)
                .then((deletedBooks) => resolve(deletedBooks))
                .catch((err) => reject(err));
        });
    }

    function findById(id) {
        return new Promise(function (resolve, reject) {
            BookModel.findById(id)
                .then((books) => resolve(books))
                .catch((err) => reject(err));
        });
    }

    function findAll() {
        return new Promise(function (resolve, reject) {
            BooksModel.find({})
                .then((books) => resolve(books))
                .catch((err) => reject(err));
        });
    }

    function create(values) {
        let newBooks = new BooksModel(values);
        return save(newBooks);
    }

    function save(newBooks) {
        return new Promise(function (resolve, reject) {
            newBook.save()
                .then(() => resolve('Books Created'))
                .catch((err) => reject(err));
        });
    }

    return controller;
}

module.exports = BooksController;
