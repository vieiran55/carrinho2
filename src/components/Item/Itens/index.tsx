import styles from "./Itens.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IOpcoes } from "interfaces/IOpcoes";

interface Props {
  title: string;
  description: string;
  photo: string;
  price: number;
  id: number;
  listaDeCompras: IOpcoes[];
  setListaDeCompras: React.Dispatch<React.SetStateAction<IOpcoes[]>>;
  vazio: boolean;
  setVazio: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Itens(props: Props) {
  const {
    id,
    title,
    description,
    price,
    photo,
    listaDeCompras,
    setListaDeCompras,
    vazio,
    setVazio,
  } = props;
  const [efeito, setEfeito] = useState(false);
  const navigate = useNavigate();

  const total = listaDeCompras.reduce((total, valor) => total + valor.price, 0);

  const card = (id: number, title: string, photo: string, price: number) => {
    return { id: id, title: title, photo: photo, price: price };
  };

  const adicionarItemNoCarrinho = () => {
    setListaDeCompras((listaDeCompras) => [
      ...listaDeCompras,
      card(id, title, photo, price),
    ]);
    setEfeito(true);
    setVazio(true);
  };

  return (
    <>
      <div className={styles.item}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
        </div>
        <div className={styles.item__imagem}>
          <p>
            <img src={`${photo}`} alt={title} />
            {`${description.substring(0, 300)}...`}
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
              onClick={adicionarItemNoCarrinho}
              onAnimationEnd={() => setEfeito(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
