const jwt = require("jsonwebtoken");

const secret = process.env.SECRET_SESSION;

// withAuth

module.exports = withAuth;
