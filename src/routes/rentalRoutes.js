const express = require('express');

const Rental = require('../controllers/rentalController');

const router = express.Router();

// router.post('/rentals', Rental.createRental);
// router.get('/rentals', Rental.getRental);
// router.get('/rentalsByName', Rental.getRentalByName);
// router.patch('/rentals', Rental.updateRental);
// router.delete('/rentals', Rental.deleteRental);

router.post('/', Rental.createRental);
router.get('/', Rental.getRental);
router.get('/:id', Rental.getRentalById);
router.patch('/:id', Rental.updateRentalById);
router.delete('/:id', Rental.deleteRentalById);

router.get('/:username', Rental.getRentalByName);
router.patch('/:username', Rental.updateRentalByName);
router.delete('/:username', Rental.deleteRentalByName);


module.exports = router;



