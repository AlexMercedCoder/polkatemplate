///////////////////////////
// Environmental Variables
///////////////////////////
require("./envfunc")();
const {
  PORT = 3000,
  SECRET = "secret",
  NODE_ENV = "development",
} = process.env;

////////////////////////////
// DEPENDENCIES
////////////////////////////
const app = require("./controllers/rootRouter");
const {log} = require("mercedlogger")

//////////////////////////
// App Listener
//////////////////////////
app.listen(PORT, () => {
  log.green("Server Status",`listening on port ${PORT}`);
});
