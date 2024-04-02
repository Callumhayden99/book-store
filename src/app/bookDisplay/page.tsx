// app/bookDisplay/[id]/page.tsx

import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  rating: number;
  synopsis: string;
  image: string;
  otherTitles: string[];
}

async function getBook(bookId: string): Promise<Book> {
  // Fetch the book details based on the ID from your data source
  // Replace this with your actual data fetching logic
  const book = {
    id: 1,
    title: "Book Title",
    author: "Author Name",
    genre: "Genre",
    isbn: "1234567890",
    rating: 4.5,
    synopsis: "Book synopsis goes here...",
    image: "/path/to/book-image.jpg",
    otherTitles: ["Book 1", "Book 2", "Book 3"],
  };

  return book;
}

export default async function BookDetails({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { tab?: string };
}) {
  const book = await getBook(params.id);
  const activeTab = searchParams.tab || "synopsis";

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row max-w-6xl">
          <div className="md:w-1/3 mb-12 md:mb-0 md:mr-16">
            <Image
              src={book.image}
              alt={book.title}
              width={500}
              height={750}
              className="rounded-lg shadow-lg"
            />
            <div className="mt-8">
              <div className="flex">
                <a
                  href={`/bookDisplay/${params.id}?tab=synopsis`}
                  className={`text-2xl font-bold mr-6 ${
                    activeTab === "synopsis"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  Synopsis
                </a>
                <a
                  href={`/bookDisplay/${params.id}?tab=otherTitles`}
                  className={`text-2xl font-bold ${
                    activeTab === "otherTitles"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  Other Titles
                </a>
              </div>
              <div className="mt-6">
                {activeTab === "synopsis" ? (
                  <p className="text-xl text-gray-700">{book.synopsis}</p>
                ) : (
                  <ul className="list-disc pl-6 text-xl">
                    {book.otherTitles.map((title, index) => (
                      <li key={index} className="text-gray-700 mb-2">
                        {title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <h1 className="text-5xl font-bold mb-6">{book.title}</h1>
            <p className="text-2xl text-gray-600 mb-8">by {book.author}</p>
            <p className="text-2xl text-gray-600 mb-8">Genre: {book.genre}</p>
            <p className="text-2xl text-gray-600">ISBN: {book.isbn}</p>
            <div className="flex items-center mb-8 mt-6">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  size={32}
                  className={`text-yellow-500 ${
                    index < book.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-4 text-2xl text-gray-600">
                {book.rating.toFixed(1)}/5
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
