const {userService} = require('../services/userService');

const userLogin = (req, res) => {
    const {nickname, password} = req.body;
    const user = userService(nickname, password);
    res.status(200).json(user);
};

// const userSignup = (req, res) => {};
// const userDelete = (req, res) => {};

module.exports = {
    userLogin,
    // userSignup,
    // userDelete
};