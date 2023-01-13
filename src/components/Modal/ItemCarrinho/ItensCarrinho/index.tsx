import styles from "./ItensCarrinho.module.scss";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  photo: string;
  price: number;
  id: number;
}

export default function ItensCarrinho(props: Props) {
  const { id, title, price, photo } = props;
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.item}>
        <div className={styles.item__titulo}>
          <h2>{title.substring(0,20)}</h2>
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
