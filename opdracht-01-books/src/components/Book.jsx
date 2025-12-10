import { useState } from "react";

const Book = ({ title, author, image, category, year, pages, description }) => {
  const [liked, setLiked] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <article
      className={`book ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="book-inner">

        {/* VOORKANT */}
        <div className="book-front">
          <img src={image} alt={title} />
          <h2>{title}</h2>
          <p>{author}</p>
          <p className="category">{category}</p>

          {/* Favoriet sectie */}
          <div className="favorite-section">
            <button
              className="heart-btn"
              onClick={(e) => {
                e.stopPropagation(); // voorkom flip bij favoriet klikken
                toggleLike();
              }}
            >
              {liked ? "❤️" : "🤍"}
            </button>

            {liked && (
              <p className="favorited-text">Toegevoegd aan favorieten</p>
            )}
          </div>
        </div>

        {/* ACHTERKANT */}
        <div className="book-back">
          <h2>Details</h2>
          <p>Publicatiejaar: {year}</p>
          <p>Pagina's: {pages}</p>
          <p>{description}</p>

          <button
            onClick={(e) => {
              e.stopPropagation(); // voorkom dubbel flippen
              handleFlip();
            }}
          >
            Klik om terug te gaan
          </button>
        </div>

      </div>
    </article>
  );
};

export default Book;
