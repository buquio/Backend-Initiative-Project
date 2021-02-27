
const express = require('express');

const User = require('../controllers/userController');
const Validation = require('../validation/userValidation');


const router = express.Router();



router.post('/',  Validation.createUser, User.createUser); //createuser
router.get('/', User.getUser);

//endpoints by id parameter
router.get('/:id', User.getUserById);
router.patch('/:id', Validation.updateUserById, User.updateUserById);
router.delete('/:id', User.deleteUserById);

//endpoints by username parameter
router.get('/:username', User.getUserByName);
router.patch('/:username', Validation.updateUserByName, User.updateUserByName);
router.delete('/:username', User.deleteUserByName);



module.exports = router;



