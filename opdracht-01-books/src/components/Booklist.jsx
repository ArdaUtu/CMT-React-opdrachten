
import Book from './Book'
import { useState } from "react";

const BookList = () => {
  const [books, setbooks] = useState([
    {
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      image: './images/book-1.png',
    },
    {
      title: 'Fantasia VI',
      author: 'Geronimo Stilton',
      image: './images/book-2.png',
    },
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      image: './images/book-3.png',
    },
  ]);

  return (
    <section className="BookBody">
      {books.map((book) => (
        <Book
          title={book.title}
          author={book.author}
          img={book.image}
        />
      ))}
    </section>
  );
};

export default BookList;
