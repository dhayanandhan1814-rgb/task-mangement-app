import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Protect private routes
const protect = async (req, res, next) => {
  let token;

  try {
    // Check Authorization Header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from token
      req.user = await User.findById(decoded.id).select("-password");

      // If user not found
      if (!req.user) {
        return res.status(401).json({
          message: "User not found"
        });
      }

      next();
    } else {
      return res.status(401).json({
        message: "No token, authorization denied"
      });
    }

  } catch (error) {
    return res.status(401).json({
      message: "Not authorized, token failed"
    });
  }
};

export default protect;