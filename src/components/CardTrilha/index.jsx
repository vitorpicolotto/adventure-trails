import * as PropTypes from "prop-types";


function CardTrilha({dadosTrilha}){


    return(
        <>
        <h1>{dadosTrilha.nomeTrilha}</h1>
        <span>{dadosTrilha.cidade} / {dadosTrilha.estado}</span>
        <img src={dadosTrilha.urlImagem} width="200px" alt="imagem da trilha da Costa da Lagoa" />
        </>
    )
}

CardTrilha.PropTypes = {
    dadosTrilha: PropTypes.exact({
        nomeTrilha: PropTypes.string.isRequired, //para ser obrigratório
        cidade: PropTypes.string,
        estado: PropTypes.string,
        duracao: PropTypes.number,
        trajeto: PropTypes.number,
        dificuldade: PropTypes.string,
        tipo: PropTypes.oneOf(['caminhada', 'ciclismo']), //enum
        nomeUsuario: PropTypes.string,
        urlImagem: PropTypes.string

    })
}
//aqui vão os prop-types

export default CardTrilha;