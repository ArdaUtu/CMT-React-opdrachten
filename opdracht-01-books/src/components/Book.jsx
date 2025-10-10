const Book = ({ title, author, img }) => {
  return (
    <section className="book-list">
      <img class ="Image" src={img} alt={title} />
      <h2 class ="TitleText">{title}</h2>
      <p class ="AuthorText">{author}</p>
    </section>
  );
};

export default Book;
