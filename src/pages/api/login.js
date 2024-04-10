// /api/login.js
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      // Find the user by email
      const userByEmail = await prisma.user.findFirst({ where: { email } });

      if (userByEmail) {
        // Find the user by id
        const user = await prisma.user.findUnique({
          where: {
            id: userByEmail.id,
          },
        });

        if (user) {
          const passwordMatch = await bcrypt.compare(password, user.password);

          if (passwordMatch) {
            const token = jwt.sign(
              { userId: user.id, email: user.email, role: user.role },
              process.env.JWT_SECRET, // Access the JWT secret from the `next.config.mjs` file
              { expiresIn: "1h" }
            );

            res.status(200).json({ token });
          } else {
            res.status(401).json({ message: "Invalid password" });
          }
        } else {
          res.status(401).json({ message: "User not found" });
        }
      } else {
        res.status(401).json({ message: "User not found" });
      }
    } catch (error) {
      console.error("Error in /api/login:");
      console.error("Error message:", error.message);
      console.error("Error stack trace:", error.stack);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
