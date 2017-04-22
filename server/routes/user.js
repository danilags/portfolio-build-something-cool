var express = require('express');
var router = express.Router();
var contUser = require('../controllers/user');

router.get('/', contUser.getAll)

router.get('/:id', contUser.userFindOne)

router.post('/', contUser.createUser)

router.delete('/:id', contUser.deleteUser)


module.exports = router;
