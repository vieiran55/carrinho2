import styles from "./ItemCarrinho.module.scss";
import ItensCarrinho from "./ItensCarrinho";
import { useState } from "react";
import { IOpcoes } from "interfaces/IOpcoes";

interface Props {
  listaDeCompras: IOpcoes[];
  setListaDeCompras: React.Dispatch<React.SetStateAction<IOpcoes[]>>;
  quantidadeArr: number;
  setQuantidadeArr: React.Dispatch<React.SetStateAction<number>>;
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ItemCarrinho(props: Props) {
  const {
    listaDeCompras,
    setListaDeCompras,
    quantidadeArr,
    setQuantidadeArr,
    isShown,
    setIsShown,
  } = props;

  return (
    <>
      <div className={styles.itens}>
        {listaDeCompras.map((item, index) => (
          <ItensCarrinho
            isShown={isShown}
            setIsShown={setIsShown}
            quantidadeArr={quantidadeArr}
            setQuantidadeArr={setQuantidadeArr}
            listaDeCompras={listaDeCompras}
            setListaDeCompras={setListaDeCompras}
            key={index}
            {...item}
          />
        ))}
      </div>
    </>
  );
}
