const router = require("express").Router();

const Users = require("../data/helpers/authModels");
const restricted = require("../auth/restricted-middleware.js");

router.get("/", restricted, async (req, res) => {
  try {
    const users = await Users.find();
    res.json({ users, user: req.decodedToken });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
