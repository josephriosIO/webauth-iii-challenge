const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authDb = require("../data/helpers/authModels");
const secrets = require("../data/config/secrets.js");
const generatetoken = require("../auth/token");

router.post("/register", async (req, res) => {
  try {
    let user = req.body;
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;

    const registerUser = await authDb.add(user);
    res.status(201).json(registerUser);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    let { username, password } = req.body;
    const loginUser = await authDb.findBy({ username }).first();

    const isMatch = await bcrypt.compare(password, loginUser.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "invalid creds" });
    }
    const token = generatetoken(loginUser);
    res.status(200).json({
      message: `Welcome ${loginUser.username}!`,
      token
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
