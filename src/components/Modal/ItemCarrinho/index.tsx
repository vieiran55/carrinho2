import styles from "./ItemCarrinho.module.scss";
import equipamentos from "dados/equipamentos.json";
import ItensCarrinho from "./ItensCarrinho";
import { useState } from "react";
import { IOpcoes } from "interfaces/IOpcoes";


interface Props {
  listaDeCompras: IOpcoes[];
  setListaDeCompras: React.Dispatch<React.SetStateAction<IOpcoes[]>>
}


export default function ItemCarrinho(props: Props) {

  const {listaDeCompras, setListaDeCompras} = props;
  
  return (
    <>
      <div className={styles.itens}>
        {listaDeCompras.map((item, index) => (
          <ItensCarrinho listaDeCompras={listaDeCompras} setListaDeCompras={setListaDeCompras} key={index} {...item} />
        ))}
      </div>
    </>
  );
}
