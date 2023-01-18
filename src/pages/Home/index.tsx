import Item from "components/Item";
import { IOpcoes } from "interfaces/IOpcoes";
import estilos from "./Home.module.scss";


interface Props {
  listaDeCompras: IOpcoes[];
  setListaDeCompras: React.Dispatch<React.SetStateAction<IOpcoes[]>>
}



export default function Home(props: Props){
  const {listaDeCompras, setListaDeCompras} = props;
  return(
    <main className={estilos.corpo}>
      <Item listaDeCompras={listaDeCompras} setListaDeCompras={setListaDeCompras}/>
    </main>
  );
}