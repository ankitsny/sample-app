const { putUser, createUser, findUserByEmail } = require('../dal/users.dal');


const { newAuthToken } = require('../helpers/token');

exports.register = async (req, res) => {
  // TODO: Validate all required fields
  try {
    const user = await createUser(req.body);
    const token = newAuthToken(user.email);
    return res.status(200).send({ user, token });
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.login = async (req, res) => {
  try {
    const user = await findUserByEmail(req.body.email);
    console.log(req.body);
    if (user.validPassword(req.body.password)) {
      const token = newAuthToken(user.email);
      return res.status(200).send({ user, loggedIn: true, token });
    }
    return res.status(400).send({ message: 'Invalid Email or Password' });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};


exports.getUserByEmail = async (req, res) => {
  console.log(req.body);

  try {
    const user = await findUserByEmail(req.body.email);
    console.log(user);
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

exports.forgotPassword = async (req, res) => {
  console.log(req.body);
  return res.status(200).send('forgotPassword');
};


exports.putUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = await putUser(req.body);
    console.log(user);
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
