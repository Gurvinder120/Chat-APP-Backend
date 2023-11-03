const express = require("express");
const cors = require("cors");
const User = require("./db");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/demo", async (req, res) => {
  let user = new User();
  user.useremail = req.body.email;

  const doc = await user.save();

  res.json(doc);
  console.log(doc);
});

app.listen(3000, () => {
  console.log("server started");
});
