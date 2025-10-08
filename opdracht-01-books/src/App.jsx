import './App.css'
import Booklist from './components/Booklist'
import Boekimage from './assets/images/book-1.png'
import Boekimage2 from './assets/images/book-2.png'
import Boekimage3 from './assets/images/book-3.png'
function App() {

  return (
    <>
    <div class ="BookBody">
      <Booklist img={Boekimage} title="Harry Potter and sorcerers" author= "Joanne Rowling"/>
      <Booklist img={Boekimage2} title="Fantasia VI" author= "Geronimo Stilton"/>
      <Booklist img={Boekimage3} title="THE HUNGER GAMES" author= "Suzanne Collins"/>
    </div>
    </>
  )
}

export default App;
