// Require dependencies for use
let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');

// Create Express App
let app = express();

// Define the PORT for listening
let PORT = 3000

// Grab the body as a JSON off of the network requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

// Make sure app is listening to PORT 3000
app.listen(PORT, () => console.log(`Server running and port ${PORT}`));