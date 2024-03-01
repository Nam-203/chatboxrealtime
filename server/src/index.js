const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require('./routes')
dotenv.config();
const app = express();
const port = process.env.PORT || 3080;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
 
routes(app)
mongoose
  .connect(`${process.env.MONGOOSE_DB}`)
  .then(() => {
    console.log(`Connect Db success!${port}`);
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(port, () => {
  console.log("Server is running in port: ", +port);
});
