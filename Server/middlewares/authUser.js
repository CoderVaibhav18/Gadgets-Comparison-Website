const jwt = require("jsonwebtoken");
const redisClient = require("../sevices/redisService");

const authUser = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.headers.Authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const blackListedToken = await redisClient.get(token);

    if (blackListedToken) {
      res.clearCookie("token");
      res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ msg: err.message });
  }
};
module.exports = { authUser };
