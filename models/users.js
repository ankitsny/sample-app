
const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  email: {
    type: String, trim: true, lowercase: true, unique: true,
  },
  phone: { type: Number },
  firstName: String,
  lastName: String,
  password: String,
  city: String,
  district: String,
  state: String,
  country: String,
  pinCode: Number,
});


userSchema.methods.generateHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
userSchema.methods.validPassword = function (password) {
  console.log(password, this.password);
  return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('User', userSchema);
