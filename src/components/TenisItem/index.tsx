import styles from "./TenisItem.module.scss";
import tenis from "../../dados/tenis.json";
import { IOpcoes } from "interfaces/IOpcoes";
import TenisItens from "./TenisItens";

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

export default function TenisItem(props: Props) {
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
        {tenis.map((item) => (
          <TenisItens
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
