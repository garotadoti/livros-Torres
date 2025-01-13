import S from './inicio.module.scss'
import conect from '../../assets/conect.png'
import book from '../../assets/book.png'
import strong from '../../assets/strong.png'
import equilibrium from '../../assets/equilibrium.png'

export default function Inicio() {
    return (
        <main>
            <section className={S.primeiraSection}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>

            <section className={S.segundaSection}>
                <h2>Por que devo doar?</h2>
                <section className={S.cardsSection}> 

                    <section className={S.cards}> 
                        <img src={conect} alt="Ícone círculo social" />
                        <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </section>

                    <section className={S.cards}>
                        <img src={book} alt="Ícone de uma pessoa lendo um livro" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>

                    <section className={S.cards}>
                        <img src={strong} alt="Ícone simbolizando a união que faz a força" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </section>
                    
                    <section className={S.cards}>
                        <img src={equilibrium} alt="Ícone de uma balança de equilíbrio" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </section>
                </section>
            </section>
        </main>
    )
}