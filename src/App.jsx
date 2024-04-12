import CardTrilha from "./components/CardTrilha"
import "./App.css"
import useFetch from "./hooks/useFetch"



function App() {
  const trilhas = useFetch();

  return (
    <div className="container">
      <h1 className="titulo">Explore trilhas incríveis</h1>

    {trilhas.map((trilha, index) => (
        <CardTrilha trilhas={trilha}  key={index} />       
      ))
    }
    </div>
  )
}

export default App;
