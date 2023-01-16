require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("./config/dbconnection");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(require("./routes/docsRoutes"));

app.listen(5555, () => {
  console.log("the server is up and running at port", process.env.PORT||8080);
});

