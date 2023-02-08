const express = require('express'), router = express.Router();

let exerciseController = require('../controllers/exercise.contoller');

router.get('/palindrome/:inputString',exerciseController.palindrome);

router.get('/roman/:digits',exerciseController.roman);

module.exports = router;