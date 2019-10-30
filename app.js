// importing packages
const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
const session = require("express-session");

// initializing express
const app = express();

// importing models
const models = require("./db/models");

// importing routes
const authRoute = require("./routes/auth.js")(app, passport);

// importing passport strategies
require("./config/passport.js")(passport, models.user)

// setting variables
const PORT = process.env.PORT || 3000;

// syncing DB with sequelize
models.sequelize.sync({force : true}).then(function() {
    app.listen(PORT, () => console.log('Server is running on port:', PORT));
}).catch(err => {
    console.error('Unable to connecto to the database:', err)
});

//setting view engine
app.set("view engine", "ejs")

// adding middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
    secret: 'this is not something I want to share',
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));
app.use(passport.initialize());
app.use(passport.session());


// Routes
app.get("/", function (req, res) {
    res.render("index");
});










