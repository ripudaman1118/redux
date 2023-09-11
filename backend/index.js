const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/add-user", async (req, resp) => {
  const user = new User(req.body);
  let result = await user.save();
  resp.send(result);
});

app.get("/users", async (req, resp) => {
  const user = await User.find();
  if (user.length > 0) {
    resp.send(user);
  } else {
    resp.send({ result: "User not found" });
  }
});

app.delete("/user/:id", async (req, resp) => {
  let data = await User.deleteOne({ _id: req.params.id });
  resp.send(data);
});

app.get("/user/:id", async (req, resp) => {
  const res = await User.findOne({ _id: req.params.id });
  if (res) {
    resp.send(res);
  } else {
    resp.send({ result: "User not found" });
  }
});

app.put("/user/:id", async (req, resp) => {
  let result = await User.updateOne({ _id: req.params.id }, { $set: req.body });
  resp.send(result);
});

app.listen(8000);
