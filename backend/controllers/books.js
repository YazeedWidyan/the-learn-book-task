const bookModel = require("../models/books");

const addNewBook = (req, res) => {
  const {
    title,
    authors,
    subjects,
    yearOfPublication,
    publisherName,
    cover,
    PDF,
  } = req.body;

  const book = new bookModel({
    title,
    authors,
    subjects,
    yearOfPublication,
    publisherName,
    cover,
    PDF,
  });

  book
    .save()
    .then((result) => {
      res.status(201);
      res.json({
        success: true,
        message: "Book Created",
        book: result,
      });
    })
    .catch((err) => {
      res.status(500);
      res.json({
        success: false,
        message: "Server Error",
        Error: err.message,
      });
    });
};

const getAllBooks = (req, res) => {
  bookModel
    .find({})
    .then((result) => {
      res.status(200);
      res.json({
        success: true,
        message: "All the books",
        books: result,
      });
    })
    .catch((err) => {
      res.status(500);
      res.json({
        success: false,
        message: "Server Error",
        Error: err.message,
      });
    });
};

const getBookById = (req, res) => {
  const id = req.params.id;

  bookModel
    .findOne({ _id: id })
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: "The Book is not found",
        });
      }
      res.status(200).json({
        success: true,
        message: `The Book with id ${id}`,
        Book: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        Error: err.message,
      });
    });
};

const searchBookByTitle = (req, res) => {
  const title = req.query.title;

  if (!title) {
    res.json([]);
  } else {
    bookModel
      .find({ title: { $regex: title, $options: "i" } })
      .then((result) => {
        res.status(200);
        res.json(result);
      })
      .catch((err) => {
        res.status(500);
        res.json("Server Error");
      });
  }
};

const getBookBySubject = (req, res) => {
  const key = req.params.key;

  bookModel
    .find({ subjects: { $in: [key] } })
    .then((result) => {
      res.status(200);
      res.json(result);
    })
    .catch((err) => {
      res.status(500);
      res.json(err);
    });
};

module.exports = {
  addNewBook,
  getAllBooks,
  getBookById,
  getBookBySubject,
  searchBookByTitle,
};
