import estilos from "./BarraNavegacao.module.scss";
import { GiShoppingCart } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IOpcoes } from "interfaces/IOpcoes";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import "tw-elements";

interface Props {
  cart: boolean;
  setCart: React.Dispatch<React.SetStateAction<boolean>>;
  listaDeCompras: IOpcoes[];
  setListaDeCompras: React.Dispatch<React.SetStateAction<IOpcoes[]>>;
  vazio: boolean;
  setVazio: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BarraNavegacao(props: Props) {
  const { cart, setCart, listaDeCompras, setListaDeCompras, vazio, setVazio } =
    props;

  const abrirCarrinho = () => {
    if (!cart) {
      setCart(true);
      console.log("Agora esta Desativado");
    } else {
      setCart(false);
      console.log("Agora esta Ativo");
    }
  };

  const navigate = useNavigate();

  return (
    <nav className={estilos.barra}>
      <div className="flex justify-center">
        <div>
          <div
            className={classNames({
              ["dropdown"]: true,
              [estilos.drop]: true,
            })}
          >
            <button
              className={classNames({
                ["dropdown-toggle"]: true,
                [estilos.drop__botao]: true,
              })}
              data-bs-toggle="dropdown"
            >
              <GiHamburgerMenu className={estilos.icon}/>
            </button>
            <ul
              className={classNames({
                ["dropdown-menu"]: true,
                [estilos.drop__lista]: true,
              })}
              aria-labelledby="dropdownMenuButton1"
            >
              <Link
                className={classNames({
                  ["dropdown-item"]: true,
                  [estilos.drop__item]: true,
                })}
                to={"/"}
              >
                Home
              </Link>
              <Link
                className={classNames({
                  ["dropdown-item"]: true,
                  [estilos.drop__item]: true,
                })}
                to={"/tecnologia"}
              >
                Tecnologia
              </Link>
              <Link
                className={classNames({
                  ["dropdown-item"]: true,
                  [estilos.drop__item]: true,
                })}
                to={"/camisas"}
              >
                Camisas
              </Link>
              <Link
                className={classNames({
                  ["dropdown-item"]: true,
                  [estilos.drop__item]: true,
                })}
                to={"/tenis"}
              >
                Tenis
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className={estilos.links}>
        <Link className={estilos.links__itens} to={"/"}>
          Home
        </Link>
        <Link className={estilos.links__itens} to={"/tecnologia"}>
          Tecnologia
        </Link>
        <Link className={estilos.links__itens} to={"/camisas"}>
          Camisas
        </Link>
        <Link className={estilos.links__itens} to={"/tenis"}>
          Tenis
        </Link>
      </div>

      <div className={estilos.carrinho} onClick={abrirCarrinho}>
        <GiShoppingCart
          className={estilos.carrinho__icon}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        />
        <h1
          className={classNames({
            ["hidden"]: true,
            [estilos.carrinho__quantidade]: vazio,
          })}
        >
          {listaDeCompras.length}
        </h1>
      </div>
    </nav>
  );
}
