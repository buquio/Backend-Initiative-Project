const express = require('express');

const userRoutes = require('./userRoutes');
const movieRoutes = require('./movieRoutes')
const rentalRoutes = require('./rentalRoutes')
const router = express.Router();


router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.use('/rentals', rentalRoutes);
router.get('/', (req, res) => res.send('Welcome'));

// router.use('/users', userRoutes);
// router.use('/movies', movieRoutes);
// router.use('/rentals', rentalRoutes);
// router.use('/', (req, res) => res.send('Welcome'));


// router.get('/users', userRoutes);
// router.get('/movies', movieRoutes);
// router.get('/rentals', rentalRoutes);
// router.get('/', (req, res) => res.send('Welcome'));


module.exports = router;



