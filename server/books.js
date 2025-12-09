const bodyParser = require('body-parser');
const express = require('express');
const books = require("../data/books");
const Users = require("../data/users");

function BooksRouter() {
    let router = express();

    router.use(bodyParser.json({ limit: "100mb" }));
    router.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

router
    .route("/addbooks")
    .get(function (req, res, next) {
        console.log("get all books");
        books.findAll()
        .then((books) => {
            res.send(books);
            next();
        })
        .catch((err) => {
            next();
        });
    })
    .post(function (req, res, next) {
        console.log("post");
        let body = req.body;

        tickets.create(body)
        .then(() => {
            console.log('Created!');
            res.status(200);
            res.send(body);
            next();
        })
        .catch((err) => {
            console.log('Book already exists!');
            err.status = err.status || 500;
            res.status(401);
            next();
        })
    })
    return router;

}

module.exports = BooksRouter;