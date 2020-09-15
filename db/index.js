// Require mongoose dependency
let mongoose = require('mongoose');

// Connect the mongo db
mongoose.connect('mongodb://127.0.0.1:27017/books', {
    useNewUrlParser: true 
    }).catch(e => {
        console.error('Connection error', 
        e.message)
    })

let db = mongoose.connection

// Export the connection to be used
module.exports = db;
