import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const fictionBooks = await prisma.book.findMany({
        where: {
          genre: "Business",
        },
      });

      res.status(200).json(fictionBooks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}