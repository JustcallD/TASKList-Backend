const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const payload = {
    id: user._id,
    isAdmin: user.isAdmin,
  };
  const Token = jwt.sign(payload, process.env.SECRET_KEY);
  // {
  //   expiresIn: "5h";
  // }
  return Token;
};
module.exports = { generateToken };
