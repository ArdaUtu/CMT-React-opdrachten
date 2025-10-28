import { useState } from "react";


const Book = ({ title, author, img, verhoogTeller}) => {


const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);


function verhoogTeller(){
  setAantalKeerGelezen(aantalKeerGelezen + 1);
}


  return (
    <section className="book-list">
      <img className ="Image" src={img} alt={title} />
      <h2 className ="TitleText">{title}</h2>
      <button onClick={verhoogTeller}>Keer gelezen: {aantalKeerGelezen}</button>
      <p className ="AuthorText">{author}</p>
    </section>
  );
};


export default Book;
