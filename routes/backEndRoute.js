const Book = require("../models/book");
const path = require("path");
const router = require("express").Router();

// GET all saved books
router.get("/", (req, res) => {
    Book.find()
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        console.log(err);
        res.status(500).end();
    })
})
// POST to save book to database
router.post("/", (req, res) => {
    Book.create(req.body)
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        console.log(err);
        res.status(500).end();
    })
})

// DELETE to delete book from database
router.delete("/:id", (req, res) => {
    Book.remove({
        _id: mongojs.ObjectId(req.params.id)
    })
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        console.log(err);
        res.status(500).end();
    })
})

module.exports = router;
