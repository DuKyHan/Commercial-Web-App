const express = require("express");
const app = express();
let cors = require("cors");
app.use(cors());
app.use(express.json());

const db = require("./models");

const postProducts = require("./routes/products.js");
app.use("/product", postProducts);
const postAccount = require("./routes/account.js");
app.use("/user", postAccount);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
