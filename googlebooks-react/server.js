// Require dependencies for use
let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');

let db = require('./db');
let bookRouter = require('./routes/books');

// Create Express App
let app = express();

// Define the PORT for listening
let PORT = 3000

// Grab the body as a JSON off of the network requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/api', bookRouter);

// Make sure app is listening to PORT 3000
app.listen(PORT, () => console.log(`Server running and port ${PORT}`));