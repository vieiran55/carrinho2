import estilos from "./Modal.module.scss";
import classNames from "classnames";
import ItemCarrinho from "./ItemCarrinho";
import { IOpcoes } from "interfaces/IOpcoes";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface Props {
  cart: boolean;
  setCart: React.Dispatch<React.SetStateAction<boolean>>;
  listaDeCompras: IOpcoes[];
  setListaDeCompras: React.Dispatch<React.SetStateAction<IOpcoes[]>>;
  quantidadeArr: number;
  setQuantidadeArr: React.Dispatch<React.SetStateAction<number>>;
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
  vazio: boolean;
  setVazio: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal(props: Props) {
  const navigate = useNavigate();
  const {
    cart,
    setCart,
    listaDeCompras,
    setListaDeCompras,
    quantidadeArr,
    setQuantidadeArr,
    isShown,
    setIsShown,
    vazio,
    setVazio,
  } = props;

  const total = listaDeCompras.reduce(
    (total, valor) => total + valor.price * valor.quantidade,
    0
  );


  return (
    <>
      <div
        className={classNames({
          ["hidden"]: true,
          [estilos.modal]: cart,
        })}
      >
        <div className={estilos.cabecalho}>
          <h1 className={estilos.texto}>Carrinho</h1>
          <MdOutlineClose className={estilos.close} onClick={() => setCart(!cart)}/>
        </div>
        {isShown && (
          <>
            <div
              className={classNames({
                ["hidden"]: vazio,
              })}
            >
              Seu carrinho está vazio
            </div>
            <div>
              <ItemCarrinho
                isShown={isShown}
                setIsShown={setIsShown}
                quantidadeArr={quantidadeArr}
                setQuantidadeArr={setQuantidadeArr}
                listaDeCompras={listaDeCompras}
                setListaDeCompras={setListaDeCompras}
              />
            </div>
          </>
        )}
        <div className={estilos.finalizar}  onClick={() => navigate("/finalcompra")}>
          <button className="text-white">{`FINALIZAR COMPRA (R$ ${total.toFixed(2)})`}</button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}
