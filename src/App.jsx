import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar'
import Cart from './Components/Cart'
import ItemListContainer from './Components/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer';


function App() {
  return (
   <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}></Route>
          <Route path="/Categoria/:CategoriaId" element={<ItemListContainer/>}></Route> {/* despues de los 2 puntos es variable el "/" */}
          <Route path="/Cart" element={<Cart/>}></Route>
          <Route path="/Detalle/:DetalleId" element={<ItemDetailContainer/>}></Route>
        </Routes>
      </BrowserRouter>
   </>

  );
}

export default App;
