const express = require("express");
const port = process.env.PORT;

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.json({
    hello: "world!!",
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
