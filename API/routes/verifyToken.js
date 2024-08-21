const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1]; //split array and extract token ['bearer','token']
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) res.status(401).json("Token not valid!");
      req.user = user;
      next();
    });
    console.log("User in tokenAuthorization:", req.user);
  } else {
    return res.status(401).json("Not authenticated!");
  }
};

const tokenAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Action not allowed.");
    }
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Action not allowed.");
    }
  });
};

module.exports = { verifyToken, tokenAuthorization, verifyAdmin };
