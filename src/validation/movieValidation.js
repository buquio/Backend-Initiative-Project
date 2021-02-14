const Joi = require('joi');
const Format = require('./schema');
const validator = require('./validator');

const createMovie = (req, res, next) =>{
  const format = Joi.object().keys(
    {
    title: Format.string,
    actor: Format.string,
    producer : Format.string,
    rating:Format.number

    },
    {}
  );     

  validator(format, req.body, res, next);
}

const updateMovieById = (req, res, next) =>{
  const format = Joi.object().keys(
    {
    title: Format.stringOptional,
    actor: Format.stringOptional,
    producer : Format.stringOptional,
    rating: Format.number, 
    },
    {}
  );     

  validator(format, req.body, res, next);
}
  

///////
const updateMovieByTitle = (req, res, next) =>{
  const format = Joi.object().keys(
    {
    title: Format.stringOptional,
    actor: Format.stringOptional,
    producer : Format.stringOptional,
    rating: Format.number, 
    },
    {}
  );     

  validator(format, req.body, res, next);
}
module.exports = {createMovie,updateMovieById, updateMovieByTitle}