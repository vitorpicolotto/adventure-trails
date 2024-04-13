import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const TrilhasContext = createContext();

export const TrilhasContextProvider = ({ children }) => {
  const [trilhas, setTrilhas] = useState([]);
  const dados = useFetch("/infoTrilhas.json");

  useEffect(() => {
    if (!!dados) {
      setTrilhas(dados.trilhas);
    }
  }, [dados]);

  return (
    <TrilhasContext.Provider value={{ trilhas, setTrilhas }}>
      {children}
    </TrilhasContext.Provider>
  );
};
