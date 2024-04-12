import CardTrilha from "./components/CardTrilha"
import "./App.css"
import useFetch from "./hooks/useFetch";
import { useEffect, useState } from "react";



function App() {
  
  const dados = useFetch("/infoTrilhas.json")
  const [trilhas, setTrilhas] = useState([]);

  useEffect(() => {
    if(!!dados){
      setTrilhas(dados.trilhas)
    }
  }, [dados])

  return (
    <div className="container">
      <h1 className="titulo">Explore trilhas incríveis</h1>

    {!!trilhas && 
    trilhas.map((trilha, index) => (
        <CardTrilha dadosTrilha={trilha}  key={index} />       
      ))
    }
    </div>
  )
}

export default App;
