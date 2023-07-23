import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from './Components/NavBar';
import Cart from './Components/Cart';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Footer from "./Components/Footer";

const CartContext = React.createContext('');

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
        <Footer/>
      </BrowserRouter>
   </>

  );
}

export default App;
