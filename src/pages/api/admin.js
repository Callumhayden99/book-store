import jwt from "jsonwebtoken";

const verifyToken = (handler) => (req, res) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    return handler(req, res);
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

const handler = (req, res) => {
  if (req.method === "GET") {
    if (req.user.role === "ADMIN") {
      res.status(200).json({ message: "Welcome to the admin section" });
    } else {
      res.status(403).json({ message: "Forbidden" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default verifyToken(handler);