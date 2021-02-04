
let rentals = require('../database/rentals.json');


const createRental = (req, res, next) => {
  let index = rentals.length;

  const rental = { 
    // id:req.params.id,
    "id": index + 1,
    username: req.body.username, 
    receiptNumber: req.body.receiptNumber, 
    orderNumber: req.body.orderNumber,
    movieTitles: req.body.movieTitles,
    rentDate: req.body.rentDate,
    returnDate: req.body.returnDate
  };
  rentals.push(rental);
  res.status(201).send(rentals);
  };
  


const getRental = (req, res, next) => {
  res.send(rentals);  
};


const getRentalByName = (req, res, next) => {
  const username = req.body.username;
  const rentalUser = rentals.filter(rental => rental.username === username);
  if(!rentalUser) {
      return res.send("User has no rental");    
  }
  res.json(rentalUser);
};
  

const getRentalById = (req, res, next) => {
  const  id= req.params.id 
  if (id > rentals.length || id <= 0) return res.status(404).send(`Rental with ID ${id} does not exist`);

  for (var i = 0; i < rentals.length; i++) {
    if(rentals[i].id == id){
        return res.status(200).json({message:`Rental ${req.params.id} retrieved successfully`, rentals:rentals[i] })
    }
}
};



const updateRentalByName =  (req, res, next) => {
let updated;
let found = users.find(function (user) {
  return user.username === req.body.username;
});
if (found) {
  updated = {
  id:req.params.id,
  username: req.body.username, 
  receiptNumber: req.body.receiptNumber, 
  orderNumber: req.body.orderNumber,
  movieTitle: req.body.movieTitle,
  rentDate: req.body.rentDate,
  returnDate: req.body.returnDate
  };

  let targetIndex = rentals.indexOf(found);
  rentals.splice(targetIndex, 1, updated);

  res.status(200).send(rentals);
} else {
  res.status(404).send("The user you are trying to update does not exist");
}
};



const updateRentalById =  (req, res, next) => {
  const  id= req.params.id 
  const {username,receiptNumber,orderNumber,movieTitle,rentDate,returnDate} = req.body;
  if (id > rentals.length || id <= 0) return res.status(404).send(`Rental with ID ${id} does not exist`);

  if (!username||!receiptNumber||!orderNumber||!movieTitle||!rentDate||!returnDate) 
  return res.send("You must supply for the following:username,receiptNumber,orderNumber,movieTitle,rentDate,returnDate");

  for (var i = 0; i < rentals.length; i++) {
      if(rentals[i].id == id){
          rentals[i].username = username;
          rentals[i].receiptNumber = receiptNumber;
          rentals[i]. orderNumber =  orderNumber;
          rentals[i].movieTitle = movieTitle;
          rentals[i].rentDate = rentDate;
          rentals[i].returnDate = returnDate;
      }
  }

  return res.status(200).json({message:"Rental updated successfully", rentals});
};




const deleteRentalByName = (req, res, next) => {
let found = rentals.find(user => {
  return user.username === req.body.username;
});
if (found) {
  let targetIndex = rentals.indexOf(found);
  rentals.splice(targetIndex, 1);
  res.status(200).send("The rental with the username has been deleted");
}else{ 
  res.status(404).send("The rental with the username " + req.body.username + " was not found");
}
};


const deleteRentalById = (req, res, next) => {
  const  id= req.params.id;
  if (id > rentals.length || id <= 0) return res.status(404).send(`Rental with ID ${id} does not exist`);

  for (var i = 0; i < rentals.length; i++) {
    if(rentals[i].id == id){
      rentals.splice(i, 1);
      return res.status(200).json({message:`Rental with ID ${id} deleted successfully`, rentals});
    }
  }
};


module.exports = { 
    createRental, getRental, getRentalByName, updateRentalByName, deleteRentalByName,
    getRentalById, updateRentalById, deleteRentalById
};



