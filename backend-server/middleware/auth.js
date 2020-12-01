const jwt = require('jsonwebtoken');
var path = require('path')

module.exports = (req, res, next) => {
  try {
    // const token = req.headers.authorization.split(' ')[1];
    // const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    if(!req.session)
        throw 'You should login.';

    if (req.session.login == 'success') {
        next();
    } else {
      throw 'You should login.';
    }
  } catch {
    res.redirect('/login');
 

  }
};