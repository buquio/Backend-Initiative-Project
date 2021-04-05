
const express = require('express');
const User = require('../controllers/userController');
const Validation = require('../validation/userValidation');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();


router.post('/signup', User.usersSignup);//createuser
router.post('/login', Validation.usersLogin, User.usersLogin);//createuser

router.post('/', Validation.createUser, User.createUser);//createuser
router.get('/', checkAuth, User.getUser);

router.get('/:id', checkAuth, User.getUserById);
router.patch('/:id', Validation.updateUserById, checkAuth, User.updateUserById);
router.delete('/:id', checkAuth, User.deleteUserById);

router.get('/:username', checkAuth, User.getUserByName);
router.patch('/:username', Validation.updateUserByName,checkAuth, User.updateUserByName);
router.delete('/:username', checkAuth, User.deleteUserByName);


module.exports = router;



