const Book = require('../models/book'); // Assuming you have a Book model defined

// Create a new book
exports.createBook = async (req, res) => {
  try {
    const { title, author, genre, publishedYear } = req.body;
    
    const newBook = new Book({
      title,
      author,
      genre,
      publishedYear,
    });

    await newBook.save();
    res.status(201).json({
      message: 'Book created successfully',
      book: newBook,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating book', error });
  }
};

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ books });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving books', error });
  }
};

// Get a specific book by its ID
exports.getBookById = async (req, res) => {
  const bookId = req.params.id;
  
  try {
    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json({ book });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving book', error });
  }
};

// Update a book by its ID
exports.updateBook = async (req, res) => {
  const bookId = req.params.id;
  const { title, author, genre, publishedYear } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      { title, author, genre, publishedYear },
      { new: true } // Return the updated book
    );

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json({
      message: 'Book updated successfully',
      book: updatedBook,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating book', error });
  }
};

// Delete a book by its ID
exports.deleteBook = async (req, res) => {
  const bookId = req.params.id;

  try {
    const deletedBook = await Book.findByIdAndDelete(bookId);

    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error });
  }
};
