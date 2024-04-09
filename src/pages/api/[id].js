import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;
    try {
      const book = await prisma.book.findUnique({
        where: { id: parseInt(id) },
      });
      if (book) {
        res.status(200).json(book);
      } else {
        res.status(404).json({ message: "Book not found" });
      }
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
