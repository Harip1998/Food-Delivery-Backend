/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require("firebase-function");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const pizzaRouter = require("./routes/pizzaRoutes.js");
const itemRouter = require("./routes/itemRoutes.js");
const passport = require("passport");
const users = require("./routes/users");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true},
).then(() => console.log("MongoDB successfully connected."))
    .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/users", users);

app.use(pizzaRouter);
app.use(itemRouter);


app.listen(4001, () => {
  console.warn("Server is running...on 4001");
});

exports.app=functions.https.onRequest(app);
