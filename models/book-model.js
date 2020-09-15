// Require mongoose dependency
let mongoose = require('mongoose');

// Create Schema
let Schema = mongoose.Schema;

// Book Schema
let bookSchema = new Schema(
    {
        image: { type: String, required: true},
        title: { type: String, required: true},
        author: { type: String, required: true},
        description: { type: String, required: true},
        link: { type: String, required: true}
    });

    let Book = mongoose.model("Book", bookSchema);

    module.exports = Book;