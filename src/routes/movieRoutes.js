
const express = require('express');

const Movies = require('../controllers/movieController');

const router = express.Router();

// router.post('/movies', Movies.createMovie);
// router.get('/movies', Movies.getMovies);
// router.get('/moviesByTitle', Movies.getMovieByTitle);
// router.patch('/movies', Movies.updateMovie);
// router.delete('/movies', Movies.deleteMovie);

router.post('/', Movies.createMovie);
router.get('/', Movies.getMovies);
router.get('/:id', Movies.getMovieById);
router.patch('/:id', Movies.updateMovieById);
router.delete('/:id', Movies.deleteMovieById);

router.get('/:username', Movies.getMovieByTitle);
router.patch('/:username', Movies.updateMovieByTitle);
router.delete('/:username', Movies.deleteMovieByTitle);


module.exports = router;




