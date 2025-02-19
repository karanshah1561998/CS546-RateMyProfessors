const express = require("express");
const session = require("express-session");
const nocache = require("nocache");
const exphbs = require("express-handlebars");
const configRoutes = require("./routes");
require("dotenv").config(); // Load environment variables

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_CONNECTION_STRING; // MongoDB Atlas connection string

const app = express();

app.use(nocache());
app.use("/public", express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(
  session({
    name: "AuthCookie",
    secret: "some secret string!",
    resave: false,
    saveUninitialized: true,
  })
);

configRoutes(app);

app.listen(PORT, (err) => {
  if (err) {
    console.error(`❌ Server failed to start: ${err.message}`);
    process.exit(1);
  }
  console.log(`✅ Server listening for requests on port ${PORT}`);
});
