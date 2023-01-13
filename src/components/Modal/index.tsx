import estilos from "./Modal.module.scss";
import classNames from "classnames";
import Item from "components/Item";
import ItemCarrinho from "./ItemCarrinho";

interface Props{
  cart: boolean,
  setCart: React.Dispatch<React.SetStateAction<boolean>>
}



export default function Modal(props: Props){

  const {cart, setCart} = props;

  return (
    <div className={classNames({
      ["hidden"]:true,
      [estilos.modal]: cart
    })}>
      <h1  className={estilos.texto}>
          TESTANDO MODAL
      </h1>
      <ItemCarrinho />
    </div>
  );
}