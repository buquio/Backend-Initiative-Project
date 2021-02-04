
const express = require('express');
const dotenv = require( 'dotenv');
const bodyParser = require( 'body-parser');
const morgan = require( 'morgan');
// const routes = require( './routes');
const routes = require( './routes/index');
dotenv.config();
const app = express();


// NOTE:REQUIRES NO ROUTE/INDEX.JS
// const userRoutes = require('./routes/userRoutes');
// const movieRoutes = require('./routes/movieRoutes')
// const rentalRoutes = require('./routes/rentalRoutes')
// const router = express.Router();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

// app.use('/users', userRoutes);
// app.use('/movies', movieRoutes);
// app.use('/rentals', rentalRoutes);
// app.use('/', (req, res) => res.send('Welcome'));



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
