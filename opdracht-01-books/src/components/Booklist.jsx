// BookList.jsx
import { useState } from 'react';
import Book from './Book';
import BookCounter from './BookCounter';
import booksData from '../data.js';

const BookList = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <section className="BookBody">

      <div className="search">
        <input
          type="text"
          placeholder="zoek een titel op"
          onChange={handleChange}
          value={searchInput}
          name="search"
        />
      </div>

      {/* Counter voor aantal gefilterde boeken */}
      <BookCounter aantal={filteredBooks.length} />

      {/* Boekweergave */}
      {filteredBooks.map((book, index) => (
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
