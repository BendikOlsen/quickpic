const signup = (req, res) => {
    res.render('signup');
};

const signin = (req, res) => {
    res.render('signin');
};

module.exports = {
    signin,
    signup
}
