import { NextApiRequest, NextApiResponse } from "next";
import { verifyToken } from "../../middleware/auth";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
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
