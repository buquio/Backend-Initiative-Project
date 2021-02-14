const express = require('express');

const Rental = require('../controllers/rentalController');
const Validation = require('../validation/rentalValidation');
const router = express.Router();


router.post('/', Validation.createRental, Rental.createRental);
router.get('/', Rental.getRental);

router.get('/:id', Rental.getRentalById);
router.patch('/:id', Validation.updateRentalById, Rental.updateRentalById);
router.delete('/:id', Rental.deleteRentalById);

router.get('/:username', Rental.getRentalByName);
router.patch('/:username', Validation.updateRentalByName, Rental.updateRentalByName);
router.delete('/:username', Rental.deleteRentalByName);


module.exports = router;



