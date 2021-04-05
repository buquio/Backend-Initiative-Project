
const express = require('express');
const Movies = require('../controllers/movieController');
const Validation = require('../validation/movieValidation');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();



router.post('/', Validation.createMovie, checkAuth, Movies.createMovie);
router.get('/', checkAuth, Movies.getMovies);

router.get('/', checkAuth, Movies.getMovies);
router.get('/:id', checkAuth, Movies.getMovieById);
router.patch('/:id', Validation.updateMovieByTitle, checkAuth, Movies.updateMovieById);
router.delete('/:id',checkAuth, Movies.deleteMovieById);

router.get('/:title',  checkAuth, Movies.getMovieByTitle);
router.patch('/:title', Validation.updateMovieByTitle, checkAuth, Movies.updateMovieByTitle);
router.delete('/:title',  checkAuth, Movies.deleteMovieByTitle);


module.exports = router;







