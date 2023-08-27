const connectToMongo = require("./db");
const express = require("express");
const cors  = require("cors")
connectToMongo();
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors())

app.use("/user" , require("./user/Routes"))
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
