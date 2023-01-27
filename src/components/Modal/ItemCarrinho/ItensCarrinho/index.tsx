import styles from "./ItensCarrinho.module.scss";
import { useEffect, useState } from "react";
import { IOpcoes } from "interfaces/IOpcoes";
import { TfiTrash } from "react-icons/tfi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";


interface Props {
  title: string;
  photo: string;
  price: number;
  id: number;
  quantidade: number;
  quantidadeArr: number;
  setQuantidadeArr: React.Dispatch<React.SetStateAction<number>>;
  listaDeCompras: IOpcoes[];
  setListaDeCompras: React.Dispatch<React.SetStateAction<IOpcoes[]>>;
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ItensCarrinho(props: Props) {
  const {
    id,
    title,
    price,
    photo,
    quantidade,
    listaDeCompras,
    setListaDeCompras,
    quantidadeArr,
    setQuantidadeArr,
    isShown,
    setIsShown,
  } = props;
  const index = listaDeCompras.findIndex((user) => user.id === id);
  const [cont, setCont] = useState<IOpcoes[]>([]);

  
  const quantidadeElementos = listaDeCompras.filter((x) => x.id === id).length;
  
  const recarrega1 = () => {
    setIsShown(false);
  };
  const recarrega2 = () => {
    setIsShown(true);
  };
  
  const notify = () => {
    toast.warn("Removido do Carrinho", {
      icon: ({theme, type}) =>  <img src={photo}/>,
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  
  const excluirItemDoCarrinho = () => {
    notify();
    listaDeCompras.splice(index, 1);
    setListaDeCompras([...listaDeCompras]);
  };

  const aumentarQuantidade = () => {
    setTimeout(recarrega1, 100);
    setTimeout(recarrega2, 150);
    const maisQuantidade = listaDeCompras[index].quantidade++;
  };

  const diminuirQuantidade = () => {
    if (listaDeCompras[index].quantidade > 1){
      setTimeout(recarrega1, 100);
      setTimeout(recarrega2, 150);
      const menosQuantidade = listaDeCompras[index].quantidade--;
    }else{
      excluirItemDoCarrinho();
    }
  };

  return (
    <>
      <div className={styles.item}>
        <div className={styles.item__titulo}>
          <h2>{title.substring(0, 20)}</h2>
          <TfiTrash
            className={styles.lixeira}
            onClick={excluirItemDoCarrinho}
          />
        </div>
        <div className={styles.conteiner}>
          <div className={styles.item__imagem}>
            <img src={`${photo}`} alt={title} />
          </div>
          <div className={styles.item__SetordePreco}>
            <p className={styles.item__valor}> R$ {price.toFixed(2)}</p>
            <div className={styles.item__quantidade}>
              <p>
                Qtd:
                <button
                  className={styles.botoes}
                  onClick={() => diminuirQuantidade()}
                >
                  <IoIosRemoveCircleOutline className={styles.botoes__icones}/>
                </button>
                {quantidade}
                <button
                  className={styles.botoes}
                  onClick={() => aumentarQuantidade()}
                >
                  <IoIosAddCircleOutline className={styles.botoes__icones}/>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
