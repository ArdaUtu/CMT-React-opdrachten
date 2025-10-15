// BookList.jsx
import React, { useState } from 'react';
import Book from './Book';
import BookCounter from './BookCounter';

const BookList = () => {
  const [books, setBooks] = useState([
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
      <BookCounter aantal={books.length} />

    
      {books.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          author={book.author}
          img={book.image}
          button={book.aantalKeerGelezen} 
          btn={book.Btn} 
        />
      ))}
    </section>
  );
};

export default BookList;
