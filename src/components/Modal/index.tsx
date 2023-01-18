import estilos from "./Modal.module.scss";
import classNames from "classnames";
import ItemCarrinho from "./ItemCarrinho";
import { IOpcoes } from "interfaces/IOpcoes";
import { useEffect, useState } from "react";

interface Props {
  cart: boolean;
  setCart: React.Dispatch<React.SetStateAction<boolean>>;
  listaDeCompras: IOpcoes[];
  setListaDeCompras: React.Dispatch<React.SetStateAction<IOpcoes[]>>;
}

export default function Modal(props: Props) {
  const {
    cart,
    setCart,
    listaDeCompras,
    setListaDeCompras,
  } = props;

  const total = listaDeCompras.reduce((total, valor) => total + valor.price, 0);

  return (
    <div
      className={classNames({
        ["hidden"]: true,
        [estilos.modal]: cart,
      })}
    >
      <h1 className={estilos.texto}>CARRINHO DE COMPRAS</h1>
      <ItemCarrinho
        listaDeCompras={listaDeCompras}
        setListaDeCompras={setListaDeCompras}
      />
      <div>
        <h1 className="text-white">{`Total: R$ ${total}`}</h1>
      </div>
    </div>
  );
}
