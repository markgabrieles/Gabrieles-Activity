const express = require('express');
const router = express.Router();

// Import the controller functions
const booksController = require('../controllers/bookscontroller');

// Route to create a new book
router.post('/', booksController.createBook);

// Route to get all books
router.get('/', booksController.getAllBooks);

// Route to get a book by its ID
router.get('/:id', booksController.getBookById);

// Route to update a book by its ID
router.put('/:id', booksController.updateBook);

// Route to delete a book by its ID
router.delete('/:id', booksController.deleteBook);

module.exports = router;
