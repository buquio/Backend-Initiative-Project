const jwt = require('jsonwebtoken');
const dotenv = require( 'dotenv');
dotenv.config();

const generateToken = (data) => {
    const token = jwt.sign(
      data,
      data.secret || process.env.TOKEN_SECRET,
      { expiresIn: '24hr' }
    );
    return token;
  }

  const decodeToken = (data) => {
    try {
      return jwt.verify(data.token, data.secret || process.env.TOKEN_SECRET);
    } catch (error) {
      throw error;
    }
  }

module.exports = {generateToken, decodeToken};
