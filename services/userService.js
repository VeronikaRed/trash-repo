const {repositoryUser} = require('../repositories/user');
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const userService = async (nickname, password) => {
    


    let user = await repositoryUser(nickname);
    bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
            throw new Error("Auth failed")
        } 
        if (result) {
            const token = jwt.sign(
                {
                  email: user[0].email,
                  userId: user[0]._id
                },
                process.env.JWT_KEY,
                {
                  expiresIn: "1h"
                }
              );
              return res.status(200).json({
                message: "Auth successful",
                token: token
              });
        }
    })

    console.log('result', user);
    return nickname;
}

module.exports = {
    userService
};