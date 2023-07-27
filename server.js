const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const pizzaRouter = require('./routes/pizzaRoutes.js');
const itemRouter = require('./routes/itemRoutes.js');
const passport = require("passport");

const users = require("./routes/users");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log("MongoDB successfully connected."))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/users", users);

app.use(pizzaRouter);
app.use(itemRouter);


app.listen(4001, () => { console.log('Server is running...on 4001') })
