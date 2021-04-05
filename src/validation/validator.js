  
require('joi');
const { errorResponse } = require( '../utils/response');

module.exports = async (schema, toValidate, res, next) => {
  const options = {
    errors: {
      wrap: {
        label: '',
      }
    },
    abortEarly: false,
    presence: 'required',
  }
  try {
    await schema.validateAsync(toValidate, options)
    next()
  } catch (error) {
    const errors = {};
    for (const item of error.details) //TypeError: error.details is not iterable
    //(node:11044) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). 
    // To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 7)  
    errors[item.path[0]] = item.message;
    return errorResponse(res, 422, error)
  }
}