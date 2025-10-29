import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/HomePage';
import Detailpagina from './Pages/DetailPage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route index element={<Homepage />} />
       <Route path="/animal/:id" element={<Detailpagina />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
