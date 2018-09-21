const User = require('../models/users');

exports.createUser = async (_user) => {
  const user = new User(_user);
  // Password Encryption
  user.password = user.generateHash(user.password);
  return user.save();
};

exports.findUserByEmail = async email => User.findOne({ email });

exports.putUser = async user => User.findOneAndUpdate({ email: user.email }, { $set: user }, { new: true });
