import styles from "./ItemCarrinho.module.scss";
import equipamentos from "dados/equipamentos.json";
import ItensCarrinho from "./ItensCarrinho";


export default function ItemCarrinho() {
  return (
    <>
      <div className={styles.itens}>
        {equipamentos.map((item) => (
          <ItensCarrinho key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
