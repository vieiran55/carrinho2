import styles from "./Camisas.module.scss";
import camisas from "./../../dados/camisas.json";
import CamisasItens from "./CamisasItens";
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

export default function Camisas(props: Props) {
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
        {camisas.map((item) => (
          <CamisasItens
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
