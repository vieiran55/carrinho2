import Item from "components/Item";
import { IOpcoes } from "interfaces/IOpcoes";
import estilos from "./Tenis.module.scss";
import { BsArrowUpCircleFill } from "react-icons/bs";
import Camisas from "components/Camisas";
import TenisItem from "components/TenisItem";

interface Props {
  listaDeCompras: IOpcoes[];
  setListaDeCompras: React.Dispatch<React.SetStateAction<IOpcoes[]>>;
  vazio: boolean;
  setVazio: React.Dispatch<React.SetStateAction<boolean>>;
  quantidadeArr: number;
  setQuantidadeArr: React.Dispatch<React.SetStateAction<number>>;
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Tenis(props: Props){
  const {
    listaDeCompras,
    setListaDeCompras,
    vazio,
    setVazio,
    quantidadeArr,
    setQuantidadeArr,
    isShown,
    setIsShown
  } = props;

  const topo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return(
    <main className={estilos.corpo}>
      <TenisItem
        isShown={isShown}
        setIsShown={setIsShown}
        quantidadeArr={quantidadeArr}
        setQuantidadeArr={setQuantidadeArr}
        vazio={vazio}
        setVazio={setVazio}
        listaDeCompras={listaDeCompras}
        setListaDeCompras={setListaDeCompras}
      />
      <button className={estilos.botoes__tipo__up} onClick={topo}>
        <BsArrowUpCircleFill className={estilos.seta} />
      </button>
    </main>
  );
}