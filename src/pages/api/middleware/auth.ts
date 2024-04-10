import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export const verifyToken = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: Function
) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
