const express = require("express");
const app = express();

// get port number from environment settings
require('dotenv').config();
const port = process.env.PORT || 4000;

const bodyParser = require("body-parser");
const cors = require("cors");

// const registerRoute = require('./routes/register.js');
// const loginRoute = require('./routes/login.js');
// const categoryRoute = require('./routes/category.js');
// const recipeRoute = require('./routes/recipe.js');
const  cameraRoute = require('./routes/camera.js');


// CORS cross origin resource sharing
app.use(cors());
app.use(bodyParser.json());

// match GET localhost:4000/
app.get("/", (req, res)=>{
    res.send("Sawasdee");
  });

  // ใช้ productRoute เมื่อ request ขึ่นต้นด้วย /products
// app.use("/register", registerRoute);
// app.use("/login", loginRoute);
// app.use("/category", categoryRoute);
// app.use("/recipe", recipeRoute);
app.use("/cameras", cameraRoute);


app.listen(port, () => {
    console.log("App started at port: " + port);
});