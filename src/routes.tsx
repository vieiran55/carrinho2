import BarraNavegacao from "components/BarraNavegacao";
import Modal from "components/Modal";
import FinalCompra from "pages/FinalCompra";
import Home from "pages/Home";
import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import estilos from "./styles/Routes.module.scss";

export default function AppRouter(){

  const [cart, setCart] = useState(false);


  return(
    <main className={estilos.routes}>
      <Router>
        <BarraNavegacao cart={cart} setCart={setCart}/>
        <Modal cart={cart} setCart={setCart}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/finalcompra" element={<FinalCompra />} />
        </Routes>
      </Router>
    </main>
  );
}