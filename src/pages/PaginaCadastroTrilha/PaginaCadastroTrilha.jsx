import { useForm } from "react-hook-form";
import { FormComponent, InputWrapper, PageTitle } from "./styles.js";
import { useContext } from "react";
import {TrilhasContext} from "../../context/TrilhasContext.jsx"
import { useNavigate } from "react-router-dom";

//Passo 1 - Importar o hook useForm e, em sequencia, desestruturar o retorno para utilizar a função register
//Passo 2 - Registrar os campos incluindo a validação
//Passo 3 - Criar a função de submissão
//Passo 4 - Capturar a função handleSubmit do hook useForm
//Passo 5 - Passar o valor da prop onSubmit do form como a handleSubmit e como parametro da hadleSubmit a função personalizada de envio

function PaginaCadastroTrilha() {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const {addTrail} = useContext(TrilhasContext);
  const navigate = useNavigate();

  function sendForm(formValue) {
    console.log(formValue)

    addTrail({formValue, duracao: Number(formValue.duracao), trajeto: Number(formValue.trajeto)});
    navigate("/trilhas")

  }

  return (
    <div className="container">
      <PageTitle>Cadastro de nova trilha</PageTitle>

      <FormComponent onSubmit={handleSubmit(sendForm)}>
        <InputWrapper>
          <label htmlFor="nomeTrilha">Nome da trilha</label>
          <input
            type="text"
            {...register("nomeTrilha", {
              required: "Este campo é obrigatório!",
              maxLength: { value: 100, message: "Máximo 100 caracteres" },
            })}
          />
          {errors?.nomeTrilha && <p>{errors.nomeTrilha?.message}</p>}
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="duracao">
            Duração estimada em minutos
          </label>
          <input
            type="number"
            {...register("duracao", {
              required: "Este campo é obrigatório!",
            })}
          />
          {errors?.duracao && <p>{errors.duracao?.message}</p>}
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="trajeto">Trajeto (km)</label>
          <input
            type="number"
            {...register("trajeto", {
              required: "Este campo é obrigatório!",
            })}
          />
          {errors?.trajeto && <p>{errors.trajeto?.message}</p>}
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            {...register("cidade", {
              required: "Este campo é obrigatório!",
              maxLength: { value: 60, message: "Máximo 60 caracteres" },
            })}
          />
          {errors?.cidade && <p>{errors.cidade?.message}</p>}
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="estado">Estado</label>
          <input
            type="text"
            {...register("estado", {
              required: "Este campo é obrigatório!",
              maxLength: { value: 2, message: "Máximo 02 caracteres" },
            })}
          />
          {errors?.estado && <p>{errors.estado?.message}</p>}
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="nomeUsuario">Nome do usuário</label>
          <input
            type="text"
            {...register("nomeUsuario", {
              required: "Este campo é obrigatório!",
              maxLength: { value: 60, message: "Máximo 60 caracteres" },
            })}
          />
          {errors?.nomeUsuario && <p>{errors.nomeUsuario?.message}</p>}
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="dificuldade">Dificuldade</label>
          <select
            {...register("dificuldade", {
              required: "Este campo é obrigatório!",
            })}
          >
            <option value="">Selecione uma dificuldade</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediário</option>
            <option value="Dificil">Difícil</option>
          </select>
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="tipo">Tipo de trilha</label>
          <select
            {...register("tipo", {
              required: "Este campo é obrigatório!",
            })}
          >
            <option value="">Selecione um tipo de trilha</option>
            <option value="caminhada">Caminhada</option>
            <option value="ciclismo">Bike</option>
          </select>
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="urlImagem">URL imagem da trilha</label>
          <input
            type="text"
            {...register("urlImagem", {
              required: "Este campo é obrigatório!",
              maxLength: { value: 500, message: "Máximo 300 caracteres" },
            })}
          />
          {errors?.urlImagem && <p>{errors.urlImagem?.message}</p>}
        </InputWrapper>
        <div>
          <button type="submit">Cadastrar</button>
          <button>Voltar</button>
        </div>
      </FormComponent>
    </div>
  );
}

export default PaginaCadastroTrilha;
