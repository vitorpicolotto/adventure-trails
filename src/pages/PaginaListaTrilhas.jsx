import CardTrilha from "../components/CardTrilha";
import { useContext } from "react";
import {TrilhasContext} from "../context/TrilhasContext"

function PaginaListaTrilhas() {
  const {trilhas} = useContext(TrilhasContext)

  return (
    <div className="container">
      <h1>Página Lista Trilhas</h1>

      <h1 className="titulo">Explore trilhas incríveis</h1>

      {!!trilhas &&
        trilhas.map((trilha, index) => (
          <CardTrilha dadosTrilha={trilha} key={index} />
        ))}
    </div>
  );
}

export default PaginaListaTrilhas;
