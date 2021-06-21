const express = require("express");
const router = express.Router();

const {userLogin} = require('../controllers/userController');

router.post("/login", userLogin);

// router.post("/signup", userSignup);
// router.delete("/:userId", checkAuth, userDelete);


module.exports = router;