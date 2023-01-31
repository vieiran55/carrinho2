import ItensCarrinho from "components/Modal/ItemCarrinho/ItensCarrinho";
import { IOpcoes } from "interfaces/IOpcoes";
import { useNavigate } from "react-router-dom";
import estilos from "./FinalCompra.module.scss";
import ItensFinalCompra from "./ItensFinalCompra";
import { IoMdArrowRoundBack } from "react-icons/io";

interface Props {
  listaDeCompras: IOpcoes[];
  setListaDeCompras: React.Dispatch<React.SetStateAction<IOpcoes[]>>;
  quantidadeArr: number;
  setQuantidadeArr: React.Dispatch<React.SetStateAction<number>>;
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FinalCompra(props: Props) {
  const navigate = useNavigate();

  const {
    listaDeCompras,
    setListaDeCompras,
    quantidadeArr,
    setQuantidadeArr,
    isShown,
    setIsShown,
  } = props;

  const total = listaDeCompras.reduce(
    (total, valor) => total + valor.price * valor.quantidade,
    0
  );
  return (
    <>
      <div className={estilos.final}>
        <div className={estilos.final__container}>
          <button
            className={estilos.voltar__container}
            onClick={() => navigate("/")}
          >
            <IoMdArrowRoundBack className={estilos.voltar} />
            <h1 className={estilos.voltar__texto}>Voltar</h1>
          </button>
          <div className={estilos.itens}>
            {listaDeCompras.map((item, index) => (
              <ItensFinalCompra
                isShown={isShown}
                setIsShown={setIsShown}
                quantidadeArr={quantidadeArr}
                setQuantidadeArr={setQuantidadeArr}
                listaDeCompras={listaDeCompras}
                setListaDeCompras={setListaDeCompras}
                key={index}
                {...item}
              />
            ))}
            <h1 className="text-black text-center bg-red-600">{`TOTAL COMPRA (R$ ${total.toFixed(
              2
            )})`}</h1>
            <h2 className="text-black text-center bg-red-600">
              Finalizar
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
