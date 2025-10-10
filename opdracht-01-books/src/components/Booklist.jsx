import Boekimage from '../assets/images/book-1.png'
import Boekimage2 from '../assets/images/book-2.png'
import Boekimage3 from '../assets/images/book-3.png'
import Book from './Book'

function BookList() {
 return (
  <>
      <div class ="BookBody">
      <Book img={Boekimage} title="Harry Potter and sorcerers" author= "Joanne Rowling"/>
      <Book img={Boekimage2} title="Fantasia VI" author= "Geronimo Stilton"/>
      <Book img={Boekimage3} title="THE HUNGER GAMES" author= "Suzanne Collins"/>
      </div>
    </>
  )
}

export default BookList;
