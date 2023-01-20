import BarraNavegacao from "components/BarraNavegacao";
import Modal from "components/Modal";
import { IOpcoes } from "interfaces/IOpcoes";
import FinalCompra from "pages/FinalCompra";
import Home from "pages/Home";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import estilos from "./styles/Routes.module.scss";

export default function AppRouter() {
  const [cart, setCart] = useState(false);
  const [vazio, setVazio] = useState(false);
  const [listaDeCompras, setListaDeCompras] = useState<IOpcoes[]>([]);
  const [quantidadeArr, setQuantidadeArr] = useState(1);
  const [isShown, setIsShown] = useState(true);

  // function hasDuplicates(arr: number[] = []) {
  //   return new Set(arr).size !== arr.length;
  // }

  // const arr = listaDeCompras.map(function (item) {
  //   return item.id;
  // });

  // const verificarIguais = () => {
  //   console.log(listaDeCompras);
  //   if (hasDuplicates(arr)) {
  //     setTemDuplicado(true);
  //     console.log("Duplicate elements found.");
  //     console.log(temDuplicado);
  //   } else {
  //     console.log("No Duplicates found.");
  //     setTemDuplicado(false);
  //     console.log(temDuplicado);
  //   }
  // };

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
          vazio={vazio}
          setVazio={setVazio}
          isShown={isShown}
          setIsShown={setIsShown}
          quantidadeArr={quantidadeArr}
          setQuantidadeArr={setQuantidadeArr}
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
                isShown={isShown}
                setIsShown={setIsShown}
                quantidadeArr={quantidadeArr}
                setQuantidadeArr={setQuantidadeArr}
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
