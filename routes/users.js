  
var express = require('express');
var router = express.Router();
const UsersController = require("../app/components").UsersController;

/* GET users listing. */
router.get('/', UsersController.getUsers);
router.post('/add', UsersController.addTwoNumbers);

module.exports = router;