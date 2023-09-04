const jwt = require("jsonwebtoken");

const verifyJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        res.status(403).send({ message: "Token is invalid or has expired" });
      } else {
        console.log(user);
        req.user = user;
        console.log(req.user);
        next();
      }
    });
  } else {
    res.status(401).send({ message: "Unauthorized 1" });
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyJwt(req, res, () => {
    console.log(req.user);
    if (req.user._id === req.params._id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Unauthorized");
    }
  });
};
const verifyTokenAndAdmin = (req, res, next) => {
  verifyJwt(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Unauthorized");
    }
  });
};

module.exports = {
  verifyJwt,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
