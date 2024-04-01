import * as PropTypes from "prop-types";
import "./style.css"


function CardTrilha({dadosTrilha}){


    return(
        <div className="card_container">
            <img className="card_imagem" src={dadosTrilha.urlImagem} width="200px" alt="imagem da trilha da Costa da Lagoa" />
            <h1>{dadosTrilha.nomeTrilha}</h1>
            <span>{dadosTrilha.cidade} / {dadosTrilha.estado}</span>
        </div>
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