import { useState, useEffect } from "react";


function useFetch(){
    const [infoTrilhas, setInfoTrilhas] = useState()

    useEffect(() => {
        const fetchTrilhas = async () =>{
            try {
                const response = await fetch("./infoTrilhas.json");
                const data = await response.json();
                setInfoTrilhas(data.infoTrilhas);
            } catch (error) {
                window.alert("Erro ao carregar trilhas", error)
            }
        };

        fetchTrilhas();
    }, []);

    return infoTrilhas;
}

export default useFetch