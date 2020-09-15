// Require Express dependency and controller file
let router = require('express').Router();
let bookCtrl = require('../controllers/book-ctrl');

router.route("/")
    .get(bookCtrl.findAll)
    .post(bookCtrl.create);

router.route("/:id")
    .get(bookCtrl.findById)
    .put(bookCtrl.update)
    .delete(bookCtrl.remove);

// Export Router
module.exports = router;