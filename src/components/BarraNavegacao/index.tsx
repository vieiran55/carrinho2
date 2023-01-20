import estilos from "./BarraNavegacao.module.scss";
import { GiShoppingCart } from "react-icons/gi";
import { IOpcoes } from "interfaces/IOpcoes";
import { useEffect, useState } from "react";
import classNames from "classnames";

interface Props {
  cart: boolean;
  setCart: React.Dispatch<React.SetStateAction<boolean>>;
  listaDeCompras: IOpcoes[];
  setListaDeCompras: React.Dispatch<React.SetStateAction<IOpcoes[]>>;
  vazio: boolean;
  setVazio: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BarraNavegacao(props: Props) {
  const { cart, setCart, listaDeCompras, setListaDeCompras, vazio, setVazio } = props;
  

  const abrirCarrinho = () => {
    if (!cart) {
      setCart(true);
      console.log("Agora esta Desativado");
    } else {
      setCart(false);
      console.log("Agora esta Ativo");
    }
  };



  return (
    <nav className={estilos.barra}>
      <div className={estilos.links}>
        <a className={estilos.links__itens} href="#">
          Home
        </a>
        <a className={estilos.links__itens} href="#">
          Esportes
        </a>
        <a className={estilos.links__itens} href="#">
          Casual
        </a>
      </div>
      <div className={estilos.carrinho}  onClick={abrirCarrinho}>
        <GiShoppingCart
          className={estilos.carrinho__icon}
        />
        <h1
          className={classNames({
            ["hidden"]: true,
            [estilos.carrinho__quantidade]: vazio,
          })}
        >
          {listaDeCompras.length}
        </h1>
      </div>
    </nav>
  );
}
