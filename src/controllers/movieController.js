
let movies = require('../database/movies.json');


const createMovie = (req, res, next) => {
  let index = movies.length;
  const movie = { 
      // id:req.params.id,
    "id": index + 1,
      title: req.body.title,
      actor: req.body.actor,
      producer: req.body.producer,
      rating: req.body.rating

  };
  movies.push(movie);
  res.status(201).send(movies);
};


const getMovies = (req, res, next) => {
  res.send(movies); 
};


const getMovieByTitle = (req, res, next) => {
  const title = req.body.title;
  const movie = movies.filter(movie => movie.title === title);

  if(movie.length == 0) {
      return res.status(404).send("No movie was found with this title");    
  }
  res.status(200).json(movie);
};



const getMovieById = (req, res, next) => {
  const  id= req.params.id 
  if (id > movies.length || id <= 0) return res.status(404).send(`Movie with ID ${id} does not exist`);

  for (var i = 0; i < movies.length; i++) {
    if(movies[i].id == id){
        return res.status(200).json({message:`Movie ${req.params.id} retrieved successfully`, movies:movies[i] });
    }
  }
};


const updateMovieByTitle = (req, res, next) => {
  let updated;
  let found = movies.find(function (movie) {
      return movie.title === req.body.title;
  });
  if (found) {
      updated = {
        id:req.params.id,
          title: req.body.title,
          actor: req.body.actor,
          producer: req.body.producer,
          rating: req.body.rating
      };

      let targetIndex = movies.indexOf(found);
      movies.splice(targetIndex, 1, updated);

      res.status(200).send(movies);
  } else {
      res.status(404).send("The movie you are trying to update does not exist");
  }
};



const updateMovieById = (req, res, next) => {
  const  id= req.params.id 
    const {title,actor,producer,rating} = req.body;

  if (id > movies.length || id <= 0) return res.status(404).send(`Movie with ID ${id} does not exist`);

  if (!title||!actor||!producer||!rating) 
  return res.send("You must supply for the following:'username','password','title','actor','producer','rating'");

  for (var i = 0; i < movies.length; i++) {
      if(movies[i].id == id){
          movies[i].title = title;
          movies[i].actor = actor;
          movies[i].producer = producer;
          movies[i].rating = rating;
      }
  }

  return res.status(200).json({message:"Movie updated successfully", movies});
};


const deleteMovieByTitle = (req, res, next) => {
  let found = movies.find(movie => {
      return movie.title === req.body.title;
  });
  if (found) {
      let targetIndex = movies.indexOf(found);
      movies.splice(targetIndex, 1);
      res.status(200).send("The movie has been deleted");
  }
  else{ 
      res.status(404).send("The movie with the title " + req.body.title + " was not found");
  }
};



const deleteMovieById = (req, res, next) => {
  const  id= req.params.id 
  if (id > movies.length || id <= 0) return res.status(404).send(`Movie with ID ${id} does not exist`);

  for (var i = 0; i < movies.length; i++) {
    if(movies[i].id == id){
      movies.splice(i, 1);
      return res.status(200).json({message:"Movie deleted successfully", movies});
    }
  }
};


module.exports = { 
    createMovie, getMovies, getMovieByTitle,updateMovieByTitle, deleteMovieByTitle,
    getMovieById, updateMovieById, deleteMovieById
  };


