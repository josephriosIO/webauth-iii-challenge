const jwt = require("jsonwebtoken");

const secrets = require("../data/config/secrets.js");

function generatetoken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    role: user.department
  };
  const options = {
    expiresIn: "1h"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = generatetoken;
