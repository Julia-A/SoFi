const loginCtrl = require('../controller/loginCtrl');
const getUsers = require('../controller/getUsers');
const router = require('express').Router();

router.post('/new-user', loginCtrl);
router.get('/', getUsers);

module.exports = router;
