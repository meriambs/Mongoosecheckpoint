var express = require('express');
var router = express.Router();
const { sayHello } = require('../Controllers/entry');

/* GET home page. */
router.get('/',sayHello);

module.exports = router;
