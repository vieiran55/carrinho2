import styles from "./Itens.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  photo: string;
  price: number;
  id: number;
}

export default function Itens(props: Props) {
  const { id, title, description, price, photo } = props;
  const [efeito, setEfeito] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.item}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
        </div>
        <div className={styles.item__imagem}>
          <p>
            <img src={`${photo}`} alt={title} />
            {description}
          </p>
        </div>
        <div className={styles.item__SetordePreco}>
          <div className={styles.item__valor}>
            {" "}
            R$ {price.toFixed(2)}
            <button
              className={styles.item__BotaoComprar}
              // onClick={() => navigate("/finalcompra")}
            >
              Comprar
            </button>
          </div>
          <div className={styles.item__comprar}>
            <MdOutlineAddShoppingCart
              className={`${
                efeito && "animate-balanco"
              }  p-0 fill-[#5AAD7D] rounded h-8 w-8 cursor-pointer`}
              onClick={() => {
                setEfeito(true);
              }}
              onAnimationEnd={() => setEfeito(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
