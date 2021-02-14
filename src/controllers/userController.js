const Users = require('../models/users');
const { successResponse, errorResponse } = require( '../utils/response');

const createUser = async (req, res, next) => {
  try {
    const data = req.body;
    const username = req.body.username
    const email = req.body.email    
    const user = await Users.findOne({username, email});
    if (user) return errorResponse(res, 409, 'User already exists'); 


    const result = await Users.create(data);    
    return successResponse(res, 201, 'User created successfully', result);
  } catch (err) {
    return next(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    const result = await Users.find({});

    return successResponse(res, 200, 'User retrieved successfully', result);
  } catch (err) {
    return next(err);
  }
};

const getUserByName = async (req, res, next) => {
  try {
  const username = req.params.username;
    const result = await Users.find({username:username}).exec();
    // MyModel.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {});
    //await MyModel.find({ name: 'john', age: { $gte: 18 } }).exec();

    //Adventure.findOne({ country: 'Croatia' }, function (err, adventure) {});
    //await Adventure.findOne({ country: 'Croatia' }).exec();


    return successResponse(res, 200, `User ${username} retrieved successfully`, result);
  } catch (err) {
    return next(err);
  }
};


const getUserById = async (req, res, next) => {
  try {
    const {id}= req.params;
    const result = await Users.findOne({_id:id});

    return successResponse(res, 200, `Users ${id} retrieved successfully`, result);
  } catch (err) {
    return next(err);
  }
};

const updateUserByName = async (req, res, next) => {
  try {
  const username = req.params.username;
    const data = req.body;

    const result = await Users.findOneAndUpdate({username:username}, data);
    return successResponse(res, 200, `User updated successfully`, result);
  } catch (err) {
    return next(err);
  }
};


const updateUserById = async (req, res, next) => {
  try {
    const {id}= req.params;
    const data = req.body;
    const username = req.body.username
    const email = req.body.email    

    // Check if the details already exist for another user
    const user = await Users.findOne({username, email});
    if (user && user._id != id) return errorResponse(res, 409, 'Email or username already taken'); 

    const result = await Users.findByIdAndUpdate({_id:id}, data);

    return successResponse(res, 200, `User updated successfully`, result);
  } catch (err) {
    return next(err);
  }
};

const deleteUserByName = async (req, res, next) => {
  try {
  const username = req.params.username;
    const result = await Users.findOneAndDelete({username:username});

    if (!result) return errorResponse(res, 404, 'User does not exist or has been deleted'); 
    return successResponse(res, 200, `User deleted successfully`);
  } catch (err) {
    return next(err);
  }
};  
   
const deleteUserById = async (req, res, next) => {
  try {
    const {id}= req.params;
    const result = await Users.findByIdAndDelete({_id:id});
    if (!result) return errorResponse(res, 404, 'User does not exist or has been deleted'); 

    return successResponse(res, 200, `User deleted successfully`);
  } catch (err) {
    return next(err);
  }
};

module.exports = { 
  getUser, createUser,getUserByName,updateUserByName, deleteUserByName,
  getUserById,updateUserById, deleteUserById
  };
  