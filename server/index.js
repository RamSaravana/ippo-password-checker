// Import Modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");
const authRoute = require("./routes/AuthRoutes");

// Initate Express
const app = express();

app.use(cors()); //middleware - to enable cross-sharing
dotenv.config();

// standardize the request
app.use(express.json({ limit: "1mb", extended: "true" }));
app.use(express.urlencoded({ limit: "1mb", extended: "true" }));
app.use(helmet());
app.use(morgan("common"));

// Declare the database URI and HTTP port
const port = process.env.PORT || process.env.HTTP_PORT || 5000;
// const atlas_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.rtmc8.mongodb.net/OhanaChatApp?retryWrites=true&w=majority`;
const atlas_URI = `mongodb+srv://ramsaravana:Password1234@cluster0.rtmc8.mongodb.net/ippo-poc?retryWrites=true&w=majority`;

// establish HTTP connection with database and server
mongoose
  .connect(atlas_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => console.log(`Server running on port ${port}🔥`))
  )
  .catch((error) => {
    console.log({ message: error.message });
  });

// Express routes based on the request
app.get("/", (req, res) => {
  res.send("Welcome to Ohana Application - API");
});
app.use("/auth", authRoute);
