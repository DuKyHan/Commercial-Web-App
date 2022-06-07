const express = require("express");
const router = express.Router();
const { manageOrder } = require("../models");

router.post("/", async (req, res) => {
  const { username, password, email } = req.body;
  res.json("SUCCESS");
});

router.post("/update", async (req, res) => {
  const { username, password } = req.body;
  const user = await customer.findOne({ where: { username: username } });
  if (!user) {
    res.json({ error: "User doesn't exist!" });
    return;
  }
});
router.get("/order", async (req, res) => {
  const orders = await customer.finAll();
  res.json(orders);
});
module.exports = router;
