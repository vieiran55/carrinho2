import estilos from "./Modal.module.scss";
import classNames from "classnames";
import ItemCarrinho from "./ItemCarrinho";
import { IOpcoes } from "interfaces/IOpcoes";

interface Props{
  cart: boolean,
  setCart: React.Dispatch<React.SetStateAction<boolean>>
  listaDeCompras: IOpcoes[];
  setListaDeCompras: React.Dispatch<React.SetStateAction<IOpcoes[]>>
}

export default function Modal( props : Props){

  const {cart, setCart, listaDeCompras, setListaDeCompras} = props;

  return (
    
    <div className={classNames({
      ["hidden"]:true,
      [estilos.modal]: cart
    })}>
      <h1  className={estilos.texto}>
          CARRINHO DE COMPRAS
      </h1>
      <ItemCarrinho  listaDeCompras={listaDeCompras} setListaDeCompras={setListaDeCompras}/>
      
    </div>
  );
}