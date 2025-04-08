import S from './doados.module.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function LivrosDoados() {
  const [livros, setLivros] = useState([])

  const getLivros = async () => {
    try {
      const response = await axios.get("https://desafio2-api-livrosvnw.onrender.com/livros")
      setLivros(response.data)
    } catch (error) {
      console.error("Erro ao buscar os livros:", error)
    }
  }

  useEffect(() => {
    getLivros()
  }, [])

  return (
    <section className={S.livrosDoados}>
      <h2>Livros Doados</h2>

      <section className={S.listaDeLivros}>
        {livros.length === 0 ? (
          <p>Nenhum livro doado ainda.</p>
        ) : (
          livros.map((item, index) => (
            <div key={index} className={S.livroItem}>
              <img src={item.imagem_url} alt={`Capa do livro ${item.titulo}`} />
              <div className={S.infoLivro}>
                <p className={S.titulo}>{item.titulo}</p>
                <p className={S.autor}>{item.autor}</p>
                <p className={S.categoria}>{item.categoria}</p>
              </div>
            </div>
          ))
        )}
      </section>
    </section>
  )
}
