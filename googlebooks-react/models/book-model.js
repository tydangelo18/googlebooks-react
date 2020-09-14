// Require mongoose dependency
let mongoose = require('mongoose');

// Create Schema
let Schema = mongoose.Schema

// Book Schema
let Book = new Schema(
    {
        title: { type: String, required: true},
        author: { type: String, required: true},
        description: { type: String, required: true},
        link: { type: String, required: true}
    });

    module.exports = mongoose.model('books', Book);