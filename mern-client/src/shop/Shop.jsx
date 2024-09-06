import { useEffect, useState } from "react";

import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://book-store-server-rosy.vercel.app/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-28 px-4 lg:px24">
      <h2 className="text-5xl font-bold text-center">All Books are here</h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {
          // eslint-disable-next-line react/jsx-key
          books.map((book) => (
            <Card key={book.id}>
              <img src={book.imageURL} alt="" className="h-96" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>{book.bookTitle}</p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>
                  {book.bookDescription.slice(0, 150)}
                  <Link to="" style={{ color: "navy" }}>
                    ...See More
                  </Link>
                </p>
              </p>
              <Link to={book.bookPDFURL} target="_blank" rel="noopener noreferrer"className="bg-blue-700 font-semibold text-white py-2 px-4 rounded inline-block text-center no-underline">
                Buy Now
              </Link>
            </Card>
          ))
        }
      </div>
    </div>
  );
};

export default Shop;
