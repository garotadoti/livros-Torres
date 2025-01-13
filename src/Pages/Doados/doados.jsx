import S from './doados.module.scss'
import livro from '../../assets/protagonista.jpg'

export default function LivrosDoados() {
    return (
        <section className={S.livrosDoados}>
            <h2>Livros Doados</h2>
            
            <section className={S.listaDeLivros}>

                <section className={S.Livro1}>
                    <img src={livro} alt="Imagem da capa do livro: O protagonista"/>
                    <div className={S.infoLivro}>
                        <p id='titulo'>O protagonista</p>
                        <p id='autor(a)'>Susanne Andrade</p>
                        <p id='genero'>Ficção</p>
                    </div>
                </section>
            </section>

        </section>
    )
}