const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const User = require("../models/User");

const withAuth = require("../helpers/middleware");

/* GET '/home' */

//  POST '/signup'

//  POST '/login'

//  GET '/logout'

// GET '/me'

module.exports = router;
