const Rentals = require('../models/rentals');
const { successResponse, errorResponse } = require( '../utils/response');

const createRental = async (req, res, next) => {
  try {
    const data = req.body;

    const result = await Rentals.create(data);    
    return successResponse(res, 201, 'Rental created successfully', result);
  } catch (err) {
    return next(err);
  }
};

const getRental = async (req, res, next) => {
  try {
    const result = await Rentals.find({});

    return successResponse(res, 200, 'Rentals retrieved successfully', result);
  } catch (err) {
    return next(err);
  }
};

const getRentalByName = async (req, res, next) => {
  try {
  const username = req.params.username;
    const result = await Users.findOne({_username:username});

    return successResponse(res, 200, `RentalUser ${username} retrieved successfully`, result);
  } catch (err) {
    return next(err);
  }
};

  

const getRentalById = async (req, res, next) => {
  try {
    const {id}= req.params;
    const result = await Rentals.findOne({_id:id});

    return successResponse(res, 200, `Rentals ${id} retrieved successfully`, result);
  } catch (err) {
    return next(err);
  }
};

const updateRentalByName = async (req, res, next) => {
  try {
  const username = req.params.username;
    const data = req.body;

    const result = await Users.findOneAndUpdate({username:username}, data);
    return successResponse(res, 200, `RentalUser updated successfully`, result);
  } catch (err) {
    return next(err);
  }
};
 
  
const updateRentalById = async (req, res, next) => {
  try {
    const {id}= req.params;
    const data = req.body;
    const result = await Rentals.findByIdAndUpdate({_id:id}, data);

    return successResponse(res, 200, `Rental updated successfully`, result);
  } catch (err) {
    return next(err);
  }
};

const deleteRentalByName = async (req, res, next) => {
  try {
  const username = req.params.username;
    const result = await Users.findOneAndDelete({username:username});

    if (!result) return errorResponse(res, 404, 'RentalUser does not exist or has been deleted'); 
    return successResponse(res, 200, `RentalUser deleted successfully`);
  } catch (err) {
    return next(err);
  }
};  
  
  
const deleteRentalById = async (req, res, next) => {
  try {
    const {id}= req.params;
    const result = await Rentals.findByIdAndDelete({_id:id});
    if (!result) return errorResponse(res, 404, 'Rental does not exist or has been deleted'); 

    return successResponse(res, 200, `Rental deleted successfully`);
  } catch (err) {
    return next(err);
  }
};

module.exports = { 
  createRental, getRental, getRentalByName, updateRentalByName, deleteRentalByName,
  getRentalById, updateRentalById, deleteRentalById
};
