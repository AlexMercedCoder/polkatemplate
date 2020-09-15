//Bring in App and load routes
const app = require("../config/app");

app.get("/", (req, res) => {
  console.log(res.json)
  res.json({hello: "World"});
});

module.exports = app;
