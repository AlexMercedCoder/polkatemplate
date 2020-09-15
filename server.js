////////////////////////////
// DEPENDENCIES
////////////////////////////
const app = require("./controllers/rootRouter");
const PORT = process.env.PORT || 3000;

//////////////////////////
// App Listener
//////////////////////////
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
