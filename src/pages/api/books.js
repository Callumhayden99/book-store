import { PrismaClient } from '@prisma/client';


export default async function handler(req, res) {
  const prisma = new PrismaClient();

  if (req.method === 'GET') {
    try {
      const books = await prisma.book.findMany();
      res.status(200).json(books);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}