import { useState } from "react";


const Book = ({ title, author, img, verhoogTeller}) => {


const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);


function verhoogTeller(){
  setAantalKeerGelezen(aantalKeerGelezen + 1);
}


  return (
    <section className="book-list">
      <img class ="Image" src={img} alt={title} />
      <h2 class ="TitleText">{title}</h2>
      <button onClick={verhoogTeller}>Keer gelezen: {aantalKeerGelezen}</button>
      <p class ="AuthorText">{author}</p>
    </section>
  );
};


export default Book;
