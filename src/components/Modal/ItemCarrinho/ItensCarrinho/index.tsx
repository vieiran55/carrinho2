import styles from "./ItensCarrinho.module.scss";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { IOpcoes } from "interfaces/IOpcoes";
import { TfiTrash } from "react-icons/tfi";

interface Props {
  title: string;
  photo: string;
  price: number;
  id: number;
  listaDeCompras: IOpcoes[];
  setListaDeCompras: React.Dispatch<React.SetStateAction<IOpcoes[]>>;
}

export default function ItensCarrinho(props: Props) {
  const { id, title, price, photo, listaDeCompras, setListaDeCompras } = props;
  const index = listaDeCompras.findIndex((user) => user.id === id);


  const excluirItemDoCarrinho = () => {
    listaDeCompras.splice(index, 1);
    setListaDeCompras([...listaDeCompras]);
  };
  return (
    <>
      <div className={styles.item}>
        <div className={styles.item__titulo}>
          <h2>{title.substring(0, 20)}</h2>
          <TfiTrash
            className={`${"animate-balanco"}  p-0 mt-2 fill-red-500 rounded h-4 w-4 cursor-pointer`}
            onClick={excluirItemDoCarrinho}
          />
        </div>
        <div className={styles.conteiner}>
          <div className={styles.item__imagem}>
            <img src={`${photo}`} alt={title} />
          </div>
          <div className={styles.item__SetordePreco}>
            <div className={styles.item__valor}> R$ {price.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </>
  );
}
