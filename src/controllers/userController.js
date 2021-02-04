
let users = require('../database/users.json');


const createUser = (req, res, next) => {
  let index = users.length;

    const user = {
        // id: req.params.id, 
      "id": index + 1,
        username: req.body.username, 
        password: req.body.password,
        email: req.body.email

    };
    users.push(user);
    res.status(201).send(users);
};



const getUser = (req, res, next) => {
    res.send(users);  
};


// const getUserByName = (req, res, next) => {
//   const username = req.body.username; 
//   const userName = users.filter(user => user.username === username);
//   if(!userName) {
//       return res.send("Username not found");
//   }else {
//   res.json(username);
// }
// };

const getUserByName = (req, res, next) => {
const {username}= req.body;
    if (user.username !== username) return res.status(404).send(`User with  ${username} does not exist`);

    for (var i = 0; i < users.length; i++) {
      if(users[i].username == username){
          return res.status(200).json({message:`User ${username} retrieved successfully`, users:users[i] })

      }
  }
};

const getUserById =  (req, res, next) => {
      const  id= req.params.id 
    if (id > users.length || id <= 0) return res.status(404).send(`User with ID ${id} does not exist`);

    for (var i = 0; i < users.length; i++) {
      if(users[i].id == id){
          return res.status(200).json({message:`User ${id} retrieved successfully`, users:users[i] })

      }
  }
};


const updateUserByName =  (req, res, next) => {
  let updated;
  let found = users.find(function (user) {
      return user.username === req.body.username;
  });
  if (found) {
      updated = {
          id: req.params.id, 
          username: req.body.username, 
          password: req.body.password,
          email: req.body.email

      };
      let targetIndex = users.indexOf(found);
      users.splice(targetIndex, 1, updated);

      res.status(200).send(users);
  } else {
      res.status(404).send("The user you are trying to update does not exist");
  }
};



const updateUserById =  (req, res, next) => {
  const  id= req.params.id 
    
    const { username, email, password} = req.body;
    if (id > users.length || id <= 0) return res.status(404).send(`User with ID ${id} does not exist`);
    
    if (!username || !email || !password) 
    return res.send("You must supply for the following: 'username', 'email' or 'password'");

    for (var i = 0; i < users.length; i++) {
        if(users[i].id == id){
          users[i].username = username;
          users[i].email = email;
          users[i].password = password;
        }
    }

    return res.status(200).json({message:"User updated successfully", users});
};




const deleteUserByName = (req, res, next) => {
  let found = users.find(user => {
      return user.username === req.body.username;
  });
  if (found) {
      let targetIndex = users.indexOf(found);
      users.splice(targetIndex, 1);
      res.status(200).send("The user has been deleted");
  }else{ 
      res.status(404).send("The user with the username " + req.body.username + " was not found");
  }
};



const deleteUserById = (req, res, next) => {
  const  id= req.params.id 
    if (id > users.length || id <= 0) return res.status(404).send(`User with ID ${id} does not exist`);

    for (var i = 0; i < users.length; i++) {
      if(users[i].id == id){
        users.splice(i, 1);
        return res.status(200).json({message:`User with ID ${id} deleted successfully`, users});
      }
    }
};


module.exports = { 
getUser, createUser,getUserByName,updateUserByName, deleteUserByName,
getUserById,updateUserById, deleteUserById
};

