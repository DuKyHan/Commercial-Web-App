const express = require("express");
const router = express.Router();
const { customer } = require("../models");

router.post("/", async (req, res) => {
  const { username, password, email } = req.body;
  res.json("SUCCESS");
});

router.post("/update", async (req, res) => {
  const order = await customer.findOne({ where: { username: username } });
  if (!user) {
    res.json({ error: "User doesn't exist!" });
    return;
  }
});
module.exports = router;
