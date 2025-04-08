import S from './queroDoar.module.scss'
import livro from '../../assets/livro.png'
import axios from 'axios'
import { useState } from "react"

export default function QueroDoar() {

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [imagem_url, setImagem_url] = useState("")

    const enviarDados = async () => {
        const urlApi = "https://desafio2-api-livrosvnw.onrender.com/doar"

        const dadosEnviar = {
            titulo,
            categoria,
            autor,
            imagem_url
        }

        try {
            await axios.post(urlApi, dadosEnviar)
            alert("Livro cadastrado!!")


            setTitulo("")
            setCategoria("")
            setAutor("")
            setImagem_url("")

        } catch (error) {
            alert("Erro ao cadastrar livro.")
            console.error(error)
        }
    }

    const capturaTitulo = (e) => {
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) => {
        setAutor(e.target.value)
    }

    const capturaImagem = (e) => {
        setImagem_url(e.target.value)
    }

    return (
        <section className={S.QueroDoar}>
            <h3>Por favor, preencha o formulário com suas informações e as informações do Livro</h3>

            <section className={S.formulario}>

                <div className={S.tituloFormulario}>
                    <img src={livro} alt="Logo azul em formato de um livro aberto " />
                    <h3>Informações do Livro</h3>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <fieldset>
                        <input
                            className={S.inputsFormulario}
                            type="text"
                            placeholder='Título'
                            onChange={capturaTitulo}
                            value={titulo}
                        />
                    </fieldset>

                    <fieldset>
                        <input
                            className={S.inputsFormulario}
                            type="text"
                            placeholder='Categoria'
                            onChange={capturaCategoria}
                            value={categoria}
                        />
                    </fieldset>

                    <fieldset>
                        <input
                            className={S.inputsFormulario}
                            type="text"
                            placeholder='Autor'
                            onChange={capturaAutor}
                            value={autor}
                        />
                    </fieldset>

                    <fieldset>
                        <input
                            className={S.inputsFormulario}
                            type="text"
                            placeholder='Link da Imagem'
                            onChange={capturaImagem}
                            value={imagem_url}
                        />
                    </fieldset>

                    <input
                        className={S.inputButton}
                        type="button"
                        value='Doar'
                        onClick={enviarDados}
                    />
                </form>
            </section>

        </section>
    )
}
