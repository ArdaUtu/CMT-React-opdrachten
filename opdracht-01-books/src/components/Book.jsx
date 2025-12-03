import { useState } from "react";

const Book = ({ title, author, image, category }) => {

  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);

  function verhoogTeller() {
    setAantalKeerGelezen(aantalKeerGelezen + 1);
  }

  return (
    <section className="book-list">
      <img className="Image" src={image} alt={title} />

      <h2 className="TitleText">{title}</h2>

      <button className="ButtonBook" onClick={verhoogTeller}>
        Keer gelezen: {aantalKeerGelezen}
      </button>

      <p className="AuthorText">{author}</p>
      <p className="CategoryText">Categorie: {category}</p>
    </section>
  );
};

export default Book;
