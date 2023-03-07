const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  authors: { type: String },
  subjects: { type: Array },
  yearOfPublication: { type: Number },
  publisherName: { type: String },
  cover: { type: String },
  PDF: { type: String },
});

module.exports = mongoose.model("Book", bookSchema);
