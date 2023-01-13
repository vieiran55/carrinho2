import styles from "./Item.module.scss";
import equipamentos from "dados/equipamentos.json";
import Itens from "./Itens";


export default function Item() {
  return (
    <>
      <div className={styles.itens}>
        {equipamentos.map((item) => (
          <Itens key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
