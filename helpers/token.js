
const jwt = require('jwt-simple');


const config = require('../config');

const tokens = [];

exports.removeAuthToken = (token) => {
  tokens.splice(tokens.indexOf(token), 1);
};

exports.decodeToken = (encryptedToken) => {
  try {
    const token = jwt.decode(encryptedToken, config.JWT_TOKEN_SECRET);
    return token;
  } catch (err) {
    console.error(`Token decode error!${err}`);
  }
  return '';
};

exports.newAuthToken = (email, cb) => {
  // Fallback -- Not using a callback
  if (!cb) cb = () => {};

  const expires = new Date();
  expires.setDate((new Date()).getDate() + 1);

  const token = jwt.encode({
    email,
    expires,
  }, config.JWT_TOKEN_SECRET);

  tokens.push(token);
  return token;
};
