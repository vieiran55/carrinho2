import Item from "components/Item";
import { IOpcoes } from "interfaces/IOpcoes";
import estilos from "./Home.module.scss";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

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

export default function Home(props: Props) {
  const {
    listaDeCompras,
    setListaDeCompras,
    vazio,
    setVazio,
    quantidadeArr,
    setQuantidadeArr,
    isShown,
    setIsShown,
  } = props;

  const topo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigate = useNavigate();

  return (
    <main className={estilos.corpo}>

      <Link className={estilos.banner} to={"/tecnologia"}>
        <div className={estilos.banner__tecnologia}>
          <h1 className={estilos.banner__titulo}>Tecnologia</h1>
        </div>
      </Link>

      <Link className={estilos.banner} to={"/camisas"}>
        <div className={estilos.banner__camisas}>
          <h1 className={estilos.banner__titulo}>Camisas</h1>
        </div>
      </Link>

      <Link className={estilos.banner} to={"/tenis"}>
        <div className={estilos.banner__tenis}>
          <h1 className={estilos.banner__titulo}>Tênis</h1>
        </div>
      </Link>
    </main>
  );
}
