const jwt = require("jsonwebtoken");

const secrets = require("../data/config/secrets.js");

module.exports = function(req, res, next) {
  //get token from header
  const token = req.headers.authorization;

  // check if not jsonwebtoken
  if (!token) {
    return res.status(401).json({ msg: "no token, denied" });
  }
  try {
    // verfiy token
    const decoded = jwt.verify(token, secrets.jwtSecret);
    req.decodedToken = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "shall not pass!" });
  }
};
