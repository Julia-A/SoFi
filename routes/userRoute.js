const createUser = require('../controller/createUser');
const getUsers = require('../controller/getUsers');
const router = require('express').Router();

router.post('/new-user', createUser);
router.get('/', getUsers);

module.exports = router;
