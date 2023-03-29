import React from 'react';
import Navbar from './componentes/NavBar/NavBar.jsx';
import MenuApi from './componentes/MenuApi/MenuApi.jsx';
import Carrito from './componentes/Carrito/Carrito.jsx';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import DetalleProducto from './componentes/DetalleProducto/DetalleProducto.jsx';
import Footer from './componentes/Footer/Footer.jsx';
import CartProvider from './Context/CartProvider.jsx';
import Portada from './componentes/Portada/Portada.jsx';
import Inicio from './componentes/Inicio/Inicio.jsx';
import Tendencia from './componentes/Tendencia/Tendencia.jsx';
import Nosotros from './componentes/Nosotros/Nosotros.jsx';
import Contacto from './componentes/Contacto/Contacto.jsx';

function App() {
  return (
    <main className="container_shop" data-testid="app-component">
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Portada/>
          <Tendencia/>
          <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/nosotros' element={<Nosotros/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/productos' element={<MenuApi />} />
            <Route path="/categoria/:categoriaNombre" element={<MenuApi />} />
            <Route path='/Carrito' element={<Carrito />} />
            <Route path='ItemDetalle/:id' element={<DetalleProducto />} />
          </Routes>
            <Footer />
        </BrowserRouter >
      </CartProvider>
    </main>
  );
}

export default App;