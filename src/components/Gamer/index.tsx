import styles from "./Gamer.module.scss";
import equipamentos from "./../../dados/equipamentos.json";
import GamerItens from "./GamerItens";
import { IOpcoes } from "interfaces/IOpcoes";

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

export default function Gamer(props: Props) {
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

  return (
    <>
      <div className={styles.itens}>
        {equipamentos.map((item) => (
          <GamerItens
            isShown={isShown}
            setIsShown={setIsShown}
            quantidadeArr={quantidadeArr}
            setQuantidadeArr={setQuantidadeArr}
            vazio={vazio}
            setVazio={setVazio}
            listaDeCompras={listaDeCompras}
            setListaDeCompras={setListaDeCompras}
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </>
  );
}
