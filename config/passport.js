const bcrypt = require('bcryptjs');

module.exports = (passport, user) => {
    const User = user;
    const LocalStrategy = require('passport-local').Strategy;


    passport.use('local-signup', new LocalStrategy(
    (username, password, done) => {
        User.findOne({ username: username }, (err, user) => {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
            });
        }
    )); 
};