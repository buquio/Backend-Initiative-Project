
const express = require('express');
const dotenv = require( 'dotenv');
const bodyParser = require( 'body-parser');
const morgan = require( 'morgan');
dotenv.config();
const app = express();
const mongoose = require("mongoose");

const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes')
const rentalRoutes = require('./routes/rentalRoutes')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => {
    console.log('Successfully connected to MongoDB!');
  })
  .catch((err) => {
    console.log('Unable to connect');
    console.log(err);
  });



app.use('/users', userRoutes);
app.use('/movies', movieRoutes);
app.use('/rentals', rentalRoutes);
app.use('/', (req, res) => res.send('Welcome'));




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
