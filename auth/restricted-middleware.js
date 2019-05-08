const jwt = require("jsonwebtoken");

const secrets = require("../config/secrets.js");

module.exports = function(req, res, next) {
  //get token from header
  const token = req.header.authorization;

  // check if not jsonwebtoken
  if (!token) {
    return res.status(401).json({ msg: "no token, denied" });
  }
  // verfiy token
  const decoded = jwt.verify(token, secrets.jwtSecret);
  if (!decoded) {
    // token is not valid or expired
    res.status(401).json({ you: "shall not pass!!!" });
  } else {
    // the token is valid and we can read the decodedToken
    req.decodedToken = decoded;
    next();
  }
};
