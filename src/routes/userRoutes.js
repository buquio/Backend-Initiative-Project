
const express = require('express');

const User = require('../controllers/userController');

const router = express.Router();


// router.post('/users', User.createUser);
// router.get('/users', User.getUser);
// router.get('/userByName', User.getUserByName);
// router.patch('/users', User.updateUser);
// router.delete('/users', User.deleteUser);

router.post('/', User.createUser);
router.get('/', User.getUser);
router.get('/:id', User.getUserById);
router.patch('/:id', User.updateUserById);
router.delete('/:id', User.deleteUserById);

router.get('/:username', User.getUserByName);
router.patch('/:username', User.updateUserByName);
router.delete('/:username', User.deleteUserByName);


module.exports = router;



