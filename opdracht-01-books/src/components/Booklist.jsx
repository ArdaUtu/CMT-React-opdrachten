import { useState } from 'react';
import Book from './Book';
import BookCounter from './BookCounter';
import booksData from '../data.js';

const BookList = () => {
  const [searchInput, setSearchInput] = useState('');
  const [books, setBooks] = useState(booksData);
  const [selectedCategory, setSelectedCategory] = useState('Alle');

  

  const categories = [
    'Alle',
    'Fantasy',
    'Avontuur',
    'Sciencefiction',
    'liked'
  ];

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filterHandler = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category === 'Alle') {
      setBooks(booksData);
    } else {
      const filteredBooks = booksData.filter(
        (book) => book.category === category
      );
      setBooks(filteredBooks);
    }
  };

  // Eerst filteren op categorie via de state `books`
  // Daarna zoekfilter toepassen op de titel
  const searchedBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <section className="BookBody">

      {/* Zoekbalk */}
      <div className="search">
        <input
          type="text"
          placeholder="zoek een titel op"
          onChange={handleChange}
          value={searchInput}
          name="search"
        />
      </div>




      {/* Dropdown filter */}
      <div className="filter">
        <label htmlFor="category">Filter op categorie: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={filterHandler}
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Aantal boeken teller */}
      <BookCounter aantal={searchedBooks.length} />

<div className="bookContainer">
      {/* Lijst van boeken */}
      {searchedBooks.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          author={book.author}
          image={book.image}
          category={book.category}
          description={book.description}
          year={book.year}
          pages={book.pages}
        />
      ))}

</div>
  

    </section>
  );
};

export default BookList;
