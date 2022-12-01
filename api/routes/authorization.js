const jwt = require("jsonwebtoken");

const AuthGard = (req, res, next) => {
  var token = req.header("Authorization") || req.header("authorization");
  if (!token||token==null) {
    res.status(400).json("Unathorized");
  }
  token = token.replace("Bearer ", "");
  try {
    const payload = jwt.verify(token, "secretkey", {
      expiresIn: "2h",
    });
    req.user = payload.id;
    next();
  } catch (err) {
    res.status(501).json("Session timeout");
  }
};

module.exports = AuthGard;
