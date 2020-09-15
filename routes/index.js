let router = require("express").Router();
let routes = require("./books");

// Routes
router.use("/books", routes);

// Export router
module.exports = router;