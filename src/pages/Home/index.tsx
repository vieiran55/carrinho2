import Item from "components/Item";
import estilos from "./Home.module.scss";


export default function Home(){
  return(
    <main className={estilos.corpo}>
      <Item />
    </main>
  );
}