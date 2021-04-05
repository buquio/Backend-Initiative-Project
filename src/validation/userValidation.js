const Joi = require('joi');
const Format = require('./schema');
const validator = require('./validator');

const createUser = (req, res, next) =>{
  const format = Joi.object().keys(
    {
    // _id: mongoose.Schema.Types.ObjectId,
      username: Format.string,
      password : Format.string,
      email: Format.email,
    },
    {}
  );     

  validator(format, req.body, res, next);
}

const usersSignup = (req, res, next) =>{
  const format = Joi.object().keys(
    {
    // _id: mongoose.Schema.Types.ObjectId,
      username: Format.string,
      password : Format.string,
      email: Format.email,
    },
    {}
  );     

  validator(format, req.body, res, next);
}

const usersLogin = (req, res, next) =>{
  const format = Joi.object().keys(
    {
      username: Format.string,
      password : Format.string,
    },
    {}
  );     

  validator(format, req.body, res, next);
}

const updateUserById = (req, res, next) =>{
  const format = Joi.object().keys(
    {
    // _id: mongoose.Schema.Types.ObjectId,
      username: Format.stringOptional,
      password : Format.stringOptional,
      email: Format.stringOptional,
    },
    {}
  );     

  validator(format, req.body, res, next);
}
module.exports = {createUser, updateUserById}

////////////////////
const updateUserByName = (req, res, next) =>{
    const format = Joi.object().keys(
      {
      // _id: mongoose.Schema.Types.ObjectId,
        username: Format.stringOptional,
        password : Format.stringOptional,
        email: Format.stringOptional,
      },
      {}
    );     
  
    validator(format, req.body, res, next);
  }
  module.exports = {createUser,usersSignup,usersLogin,updateUserById, updateUserByName,}