const Movies = require('../models/movies');
const { successResponse, errorResponse } = require( '../utils/response');

const createMovie = async (req, res, next) => {
  try {
    const data = req.body;

    const result = await Movies.create(data);  //acess shcema,create& save  
    return successResponse(res, 201, 'Movie created successfully', result);
  } catch (err) {
    return next(err);
  }
};

//get all movies 
const getMovies = async (req, res, next) => {
  try{
    const result = await Movies.find({});
    return successResponse(res, 200, 'Movies retrieved successfully', result);
  }catch(err){
    console.log(err)
    return next(err)
}
};

const getMovieByTitle = async (req, res, next) => {
  try {
    const title = req.params.title;
      const result = await Movies.findOne({title:title});
    // const result = await Movies.findOne({title:title}).exec();
      return successResponse(res, 200, ` Movie ${title} retrieved successfully`, result);
    } catch (err) {
      return next(err);
    }
  };
   
    
    
const getMovieById = async (req, res, next) => {
  try {
    const {id}= req.params;

    const result = await Movies.findOne({_id:id});
    return successResponse(res, 200, `Movie ${id} retrieved successfully`, result);
  } catch (err) {
    return next(err);
  }
};

const updateMovieByTitle = async (req, res, next) => {
  try {
    const title = req.params.title;
      const data = req.body;
  
      const result = await  Movies.findOneAndUpdate({title:title}, data);
      return successResponse(res, 200, `title updated successfully`, result);
    } catch (err) {
      return next(err);
    }
  };

const updateMovieById = async (req, res, next) => {
  try {
    const {id}= req.params;
    const data = req.body;
    const result = await Movies.findByIdAndUpdate({_id:id}, data);

    return successResponse(res, 200, `Movie updated successfully`, result);
  } catch (err) {
    return next(err);
  }
};

const deleteMovieByTitle = async (req, res, next) => {
  try {
  const title = req.params.title;
    const result = await  Movies.findOneAndDelete({title:title});

    if (!result) return errorResponse(res, 404, 'title does not exist or has been deleted'); 
    return successResponse(res, 200, `title deleted successfully`);
  } catch (err) {
    return next(err);
  }
};  


const deleteMovieById = async (req, res, next) => {
  try {
    const {id}= req.params;
    const result = await Movies.findByIdAndDelete({_id:id});
    if (!result) return errorResponse(res, 404, 'Movie does not exist or has been deleted'); 

    return successResponse(res, 200, `Movie deleted successfully`);
  } catch (err) {
    return next(err);
  }
};

module.exports = { 
  createMovie, getMovies, getMovieByTitle,updateMovieByTitle, deleteMovieByTitle,
  getMovieById, updateMovieById, deleteMovieById
};
