import {useEffect, useState} from  'react';

function useFetch(url){
    const [dados, setDados] = useState()

    useEffect(() => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => setDados(data) )
        .catch((error) => console.log(error));
}, [url]) //se a URL mudar, você (fetch) chama de novo, se não chama só uma vez - por isso está entre []

    return dados;
}

export default useFetch;