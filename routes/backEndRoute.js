const db = require("../models");
const path = require("path");
const router = require("express").Router();

// GET all saved books
router.get("/api/books", (req, res) => {
    db.Book.findAll()
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        console.log(err);
        res.status(500).end();
    })
})
// POST to save book to database
router.post("/api/books", (req, res) => {
    db.Book.create(req.body)
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        console.log(err);
        res.status(500).end();
    })
})

// DELETE to delete book from database
router.get("/api/books", (req, res) => {
    db.Book.findAll()
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        console.log(err);
        res.status(500).end();
    })
})

module.exports = router;
