
// const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
// // function authenticateToken (req, res, next) {
//     const authHeader = req.headers['authorization'].split(' ')[1];
//     console.log(process.env.ACCESS_TOKEN_SECRET)
//     if (authHeader == null) {
//        return res.sendStatus(401);
//     }
//     jwt.verify(authHeader, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//       if (err) {
//            console.log(err)
//            return res.sendStatus(403);
//        }
//        req.user = user;
//        next();
//     });
//     };
//    //  module.exports = { authenticateToken};

const {decodeToken} = require('../utils/sessionHandler');
const { errorResponse } = require('../utils/response');

const checkAuth = async (req, res, next) => {
  if (!req.headers.authorization) {
    return errorResponse(res, 403, 'Authorization Error: Bearer token required');
  }
  try {
    const token = req.headers.authorization.split(' ')[1];

    const payload = await decodeToken({ token });
    // if (payload._id !== req.params.id) return errorResponse(res, 403, 'You do not have right to access this route'); 

    req.user = payload; 
    next();
  } catch (error) {
    return errorResponse(res, 403, 'Invalid or expired token');
  }
};

module.exports = checkAuth;
