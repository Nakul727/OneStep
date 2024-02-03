const jwt = require('jsonwebtoken');
const secret = 'secret_phrase';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  console.log(token);

  if (!token) {
    console.error('no token');
    return res.sendStatus(401);
  }

  jwt.verify(token, secret, (err, user) => {
    if (err) {
      console.error('invalid token');
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
}

module.exports = { authenticateToken };
