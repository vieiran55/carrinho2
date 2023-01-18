import styles from "./Item.module.scss";
import equipamentos from "./../../dados/equipamentos.json";
import Itens from "./Itens";
import { IOpcoes } from "interfaces/IOpcoes";

interface Props {
  listaDeCompras: IOpcoes[];
  setListaDeCompras: React.Dispatch<React.SetStateAction<IOpcoes[]>>
}


export default function Item(props: Props) {

  const {listaDeCompras, setListaDeCompras} = props;

  return (
    <>
      <div className={styles.itens}>
        {equipamentos.map((item) => (
          <Itens listaDeCompras={listaDeCompras} setListaDeCompras={setListaDeCompras} key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
