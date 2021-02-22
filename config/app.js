///////////////////////////
// Environmental Variables
///////////////////////////
require("../envfunc")();
const {
  PORT = 3000,
  SECRET = "secret",
  NODE_ENV = "development",
} = process.env;


const Polka = require("polka");
const app = Polka();

////////////////////////////
// DEPENDENCIES
////////////////////////////
const cors = require("cors");
const corsConfig = require("./corsConfig");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const classics = require('./sendMiddleware')

/////////////////////////////
// MIDDLEWARE
/////////////////////////////
app.use(process.env.NODE_ENV === "production" ? cors(corsConfig) : cors())
app.use(classics)
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(morgan("tiny")); //Logger

module.exports = app;
