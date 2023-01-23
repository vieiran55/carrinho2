import styles from "./GamerItens.module.scss";
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

export default function GamerItens(props: Props) {
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

  // const criaElmento = () => {
  //   setListaDeCompras((listaDeCompras) => [
  //     ...listaDeCompras,
  //     card(id, title, photo, price, quantidadeArr),
  //   ]);
  //   setQuantidadeArr(quantidadeArr + 1);
  // };

  const index = listaDeCompras.findIndex((user) => user.id === id);

  //   if (hasDuplicates(arr)) {
  //     setTemDuplicado(true);
  //     console.log("Duplicate elements found.");
  //     console.log(temDuplicado);
  //   } else {
  //     console.log("No Duplicates found.");
  //     setTemDuplicado(false);
  //     console.log(temDuplicado);
  //   }

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

  // const adicionarItemNoCarrinho = () => {
  //   if(quantidadeArr === 1){
  //     setListaDeCompras((listaDeCompras) => [
  //       ...listaDeCompras,
  //       card(id, title, photo, price, quantidadeArr),
  //     ]);
  //     setQuantidadeArr(quantidadeArr + 1);
  //     console.log(listaDeCompras);
  //     setEfeito(true);
  //     setVazio(true);
  //   }else{
  //     listaDeCompras[index].quantidade++;
  //     console.log(listaDeCompras);
  //   }
  // };

  // const verificarIguais = () => {
  //   if (hasDuplicates(arr)) {
  //     console.log("Duplicate elements found.");
  //   } else {
  //     console.log("No Duplicates found.");
  //   }
  //   setQuantidade(quantidade + 1);
  // };

  // useEffect(() => {
  //   if (hasDuplicates(arr)) {
  //     setTemDuplicado(true);
  //     console.log("Estou no use effect, tem duplicidades.");
  //     console.log(`Estou no use effect ${temDuplicado}`);
  //   } else {
  //     console.log("Estou no use effect, sem duplicidades.");
  //     setTemDuplicado(false);
  //     console.log(`Estou no use effect ${temDuplicado}`);
  //   }
  // });
  //

  // const adicionarItemNoCarrinho = () => {
  //   console.log(listaDeCompras);
  //   setQuantidade(quantidade + 1);
  //   setListaDeCompras((listaDeCompras) => [
  //     ...listaDeCompras,
  //     card(id, title, photo, price, quantidade)
  //   ]);
  //   setEfeito(true);
  //   setVazio(true);
  //   console.log(listaDeCompras);
  // };

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
