const express = require('express');
const Rental = require('../controllers/rentalController');
const Validation = require('../validation/rentalValidation');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();




router.post('/', Validation.createRental, checkAuth, Rental.createRental);
router.get('/', checkAuth, Rental.getRental);


router.get('/:id', checkAuth, Rental.getRentalById);
router.patch('/:id', Validation.updateRentalById, checkAuth, Rental.updateRentalById);
router.delete('/:id', checkAuth, Rental.deleteRentalById);

router.get('/:username', checkAuth, Rental.getRentalByName);
router.patch('/:username', Validation.updateRentalByName, checkAuth, Rental.updateRentalByName);
router.delete('/:username', checkAuth, Rental.deleteRentalByName);


module.exports = router;




