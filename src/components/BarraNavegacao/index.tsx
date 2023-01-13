import estilos from "./BarraNavegacao.module.scss";
import {GiShoppingCart} from "react-icons/gi";

interface Props{
  cart: boolean,
  setCart: React.Dispatch<React.SetStateAction<boolean>>
}

export default function BarraNavegacao(props: Props) {

  const {cart, setCart} = props;

  const handleClick = () => {
    if(!cart){
      setCart(true);
      console.log("Agora esta Desativado");
    } else {
      setCart(false);
      console.log("Agora esta Ativo");
    }
  };

  return (
    <nav className={estilos.barra}>
      <div className={estilos.links}>
        <a className={estilos.links__itens} href="#">Home</a>
        <a className={estilos.links__itens} href="#">Esportes</a>
        <a className={estilos.links__itens} href="#">Casual</a>
      </div>
      <div className={estilos.carrinho}>
        <GiShoppingCart onClick={handleClick} className={estilos.carrinho__icon} />
      </div>
    </nav>
  );
}
