const authController = require("../controller/authcontroller.js");

module.exports = (app, passport) => {
    app.get("/signup", authController.signup);
    app.get("/signin", authController.signin);
    app.post("/signup", passport.authenticate("local-signup", {failureRedirect: '/signup' }), 
    (req, res) => {
        res.redirect("/dashboard")
    }
    );
}