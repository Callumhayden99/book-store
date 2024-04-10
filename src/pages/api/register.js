import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      // Check if the user already exists
      const existingUser = await prisma.user.findFirst({
        where: { email },
      });

      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }

      // Hash the password using bcrypt
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user in the database
      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Failed to register user" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
