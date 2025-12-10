import { useState } from "react";

const Book = ({ title, author, image, category }) => {
  // Stap 2: liked state
  const [liked, setLiked] = useState(false);

  // Stap 3: toggle functie
  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{author}</p>
      <p className="category">{category}</p>

      {/* Stap 4: favorite section */}
      <div className="favorite-section">
        <button className="heart-btn" onClick={toggleLike}>
          {liked ? "❤️" : "🤍"}
        </button>

        {/* Stap 5: conditionele bevestiging */}
        {liked && (
          <p className="favorited-text">Toegevoegd aan favorieten</p>
        )}
      </div>
    </div>
  );
};

export default Book;
