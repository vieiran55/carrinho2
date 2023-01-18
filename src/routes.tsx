import BarraNavegacao from "components/BarraNavegacao";
import Modal from "components/Modal";
import { IOpcoes } from "interfaces/IOpcoes";
import FinalCompra from "pages/FinalCompra";
import Home from "pages/Home";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import estilos from "./styles/Routes.module.scss";

export default function AppRouter() {
  const [cart, setCart] = useState(false);
  const [vazio, setVazio] = useState(false);
  const [listaDeCompras, setListaDeCompras] = useState<IOpcoes[]>([]);

  return (
    <main className={estilos.routes}>
      <Router>
        <BarraNavegacao
          vazio={vazio}
          setVazio={setVazio}
          cart={cart}
          listaDeCompras={listaDeCompras}
          setListaDeCompras={setListaDeCompras}
          setCart={setCart}
        />
        <Modal
          listaDeCompras={listaDeCompras}
          setListaDeCompras={setListaDeCompras}
          cart={cart}
          setCart={setCart}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                vazio={vazio}
                setVazio={setVazio}
                listaDeCompras={listaDeCompras}
                setListaDeCompras={setListaDeCompras}
              />
            }
          />
          <Route path="/finalcompra" element={<FinalCompra />} />
        </Routes>
      </Router>
    </main>
  );
}
