const express = require("express");
const router = express.Router();
const { Accounts } = require("../models");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  const { username, password, email } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Accounts.create({
      username: username,
      password: hash,
      email: email,
    });
    res.json("SUCCESS");
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Accounts.findOne({ where: { username: username } });
  if (!user) {
    res.json({ error: "User doesn't exist!" });
    return;
  }
  bcrypt.compare(password, user.password).then((match) => {
    if (!match) {
      res.json({ error: "Wrong password!" });
      return;
    }
    res.json({ username: username, id: user.id });
  });
});
module.exports = router;
