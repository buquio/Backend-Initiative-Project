
const express = require('express');

const Movies = require('../controllers/movieController');
const Validation = require('../validation/movieValidation');

const router = express.Router();


router.post('/', Validation.createMovie, Movies.createMovie);
router.get('/', Movies.getMovies);

//endpoints by id parameter
router.get('/:id', Movies.getMovieById);
router.patch('/:id', Validation.updateMovieById, Movies.updateMovieById);
router.delete('/:id', Movies.deleteMovieById);

//endpoints by username parameter
router.get('/:username', Movies.getMovieByTitle);
router.patch('/:username', Validation.updateMovieByTitle, Movies.updateMovieByTitle);
router.delete('/:username', Movies.deleteMovieByTitle);


module.exports = router;




