const Joi = require('joi');
const Format = require('./schema');
const validator = require('./validator');

const createRental = (req, res, next) =>{
  const format = Joi.object().keys(
    {
    // _id: mongoose.Schema.Types.ObjectId,
      username:Format.string,
      receiptNumber:Format.number, 
      orderNumber:Format.number,
      movieTitle:Format.string, 
      rentDate: Format.date,
      returnDate: Format.date,
    },
    {}
  );     

  validator(format, req.body, res, next);
}

const updateRentalById = (req, res, next) =>{
  const format = Joi.object().keys(
    {
      // _id: mongoose.Schema.Types.ObjectId,
      username:Format.stringOptional,
      receiptNumber:Format.number, 
      orderNumber:Format.number,
      movieTitle:Format.stringOptional, 
      rentDate: Format.date,
      returnDate: Format.date,
    },
    {}
  );     

  validator(format, req.body, res, next);
}

//////////////////
const updateRentalByName = (req, res, next) =>{
  const format = Joi.object().keys(
    {
      // _id: mongoose.Schema.Types.ObjectId,
      username:Format.stringOptional,
      receiptNumber:Format.number, 
      orderNumber:Format.number,
      movieTitle:Format.stringOptional, 
      rentDate: Format.date,
      returnDate: Format.date,
    },
    {}
  );     

  validator(format, req.body, res, next);
}
module.exports = {createRental,updateRentalById, updateRentalByName}