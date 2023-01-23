import styles from "./CamisasItens.module.scss";
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
  quantidade: number;
  quantidadeArr: number;
  setQuantidadeArr: React.Dispatch<React.SetStateAction<number>>;
  listaDeCompras: IOpcoes[];
  setListaDeCompras: React.Dispatch<React.SetStateAction<IOpcoes[]>>;
  vazio: boolean;
  setVazio: React.Dispatch<React.SetStateAction<boolean>>;
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CamisasItens(props: Props) {
  const {
    id,
    title,
    description,
    price,
    photo,
    quantidade,
    listaDeCompras,
    setListaDeCompras,
    quantidadeArr,
    setQuantidadeArr,
    vazio,
    setVazio,
    isShown,
    setIsShown,
  } = props;
  const [efeito, setEfeito] = useState(false);
  const [temDuplicado, setTemDuplicado] = useState(false);
  const navigate = useNavigate();

  const total = listaDeCompras.reduce((total, valor) => total + valor.price, 0);

  const card = (
    id: number,
    title: string,
    photo: string,
    price: number,
    quantidade: number
  ) => {
    return {
      id: id,
      title: title,
      photo: photo,
      price: price,
      quantidade: quantidade,
    };
  };

  function hasDuplicates(arr: number[] = []) {
    return new Set(arr).size !== arr.length;
  }

  const arr = listaDeCompras.map(function (item) {
    return item.id;
  });

  const index = listaDeCompras.findIndex((user) => user.id === id);

  const recarrega1 = () => {
    setIsShown(false);
  };
  const recarrega2 = () => {
    setIsShown(true);
  };

  const adicionarItemNoCarrinho = () => {
    setTimeout(recarrega1, 100);
    setTimeout(recarrega2, 150);
    if (index < 0) {
      setListaDeCompras((listaDeCompras) => [
        ...listaDeCompras,
        card(id, title, photo, price, quantidadeArr),
      ]);
      // setQuantidadeArr(quantidadeArr + 1);
      setEfeito(true);
      setVazio(true);
    } else {
      listaDeCompras[index].quantidade++;
      console.log(listaDeCompras);
    }
  };


  return (
    <>
      <div className={styles.item}>
        <div className={styles.item__titulo}>
          <h2>{title.substring(0, 50)}</h2>
        </div>
        <div className={styles.item__imagem}>
          <p>
            <img src={`${photo}`} alt={title} />
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
            <button disabled={true}>
              <MdOutlineAddShoppingCart
                className={`${
                  efeito && "animate-balanco"
                }  p-0 fill-[#5AAD7D] rounded h-8 w-8 cursor-pointer`}
                onClick={adicionarItemNoCarrinho}
                onAnimationEnd={() => setEfeito(false)}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
