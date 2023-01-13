import { useNavigate } from "react-router-dom";

export default function FinalCompra(){
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Voltar</button>
    </div>
  );
}