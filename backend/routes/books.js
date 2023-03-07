const express = require("express");
const {
  addNewBook,
  getAllBooks,
  getBookById,
  getBookBySubject,
  searchBookByTitle,
} = require("../controllers/books");

const booksRouter = express.Router();

booksRouter.post("/", addNewBook);
booksRouter.get("/", getAllBooks);
booksRouter.get("/search", searchBookByTitle);
booksRouter.get("/subjects/:key", getBookBySubject);
booksRouter.get("/:id", getBookById);

module.exports = booksRouter;
