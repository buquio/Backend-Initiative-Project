// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {generateToken} = require('../utils/SessionHandler');
const { successResponse, errorResponse } = require( '../utils/response');
const { hash, genSalt, compareSync } = require('bcrypt');

const Users = require('../models/users');
const dotenv = require( 'dotenv');
dotenv.config();

// same as signup without hashing password
const createUser = async (req, res, next) => {
  try {
    const data = req.body;
    const {username, email }= req.body;
    // const username = req.body.username
    // const email = req.body.email    

    //Checking if user already exists
    const user = await Users.findOne({username, email});
    // const user = await Users.findOne({username: username, email: email})

    //if user is found in the database collection Users, return error
    if (user) {
      return errorResponse(res, 409, 'User already exists');
    } 

    const result = await Users.create(data);    
    return successResponse(res, 201, 'Users created successfully', result);
  } 
  catch (err) {
    return next(err);
  }
};


// same as userscreate + Password
const usersSignup = async (req, res, next) => {
  try {
    const data = req.body;
    const {username, email }= req.body;

    const user = await Users.findOne({username, email});
    if (user) return errorResponse(res, 409, 'User already exists'); 

    const salt = await (0, genSalt)(10);
    const newPassword = await hash(data.password, salt);
    data.password = newPassword;

    const result = await Users.create(data);    
    const token = await generateToken({_id:result._id, username});
    
    return successResponse(res, 201, 'Users created successfully', {username, token});
  } catch (err) {
    return next(err);
  }
};
const usersLogin = async(req, res) => { 
  const data = req.body;
  const {username} = req.body;

  try {
    const user = await Users.findOne({ username });
    if (!user) return errorResponse(res, 404, 'User does not exist');
   
    // if (user.password === undefined) return errorResponse(res, 404, 'Did you sign up using Facebook? If yes, please log in via your Facebook account');

    // const passwordCorrect = compareSync(data.password, user.password);
    // if (!passwordCorrect) {
    //   return errorResponse(res, 400, 'Incorrect password');
    // }

    const token = await generateToken({_id:user._id, username});
    return successResponse(res, 200, 'Login successful', {username, token});
  } catch (err) {
    return next(err);
  }
}


const getUser = async (req, res, next) => {
  try {
    const result = await Users.find({});

    return successResponse(res, 200, 'Users retrieved successfully', result);
  } catch (err) {
    return next(err);
  }
};


 
    const getUserByName = async (req, res, next) => {
    try {
    const username = req.params.username;
      const result = await Users.find({username:username}).exec();
      
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
  getUser, createUser,usersSignup,usersLogin,getUserByName,updateUserByName, deleteUserByName,
  getUserById,updateUserById, deleteUserById
  };
  