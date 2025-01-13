import S from './queroDoar.module.scss'
import livro from '../../assets/livro.png'

export default function QueroDoar() {
    return (
        <section className={S.QueroDoar}>
            <h3>Por favor, preencha o formulário com suas informações e as informações do Livro</h3>

            <section className={S.formulario}>

                <div className={S.tituloFormulario}>
                    <img src={livro} alt="Logo azul em formato de um livro aberto " />
                    <h3>Informações do Livro</h3>
                </div>
                <form className={S.forms} action="">

                        <fieldset>
                            <input className={S.inputsFormulario} type="text" placeholder='Titulo'/>
                        </fieldset>

                        <fieldset>
                            <input className={S.inputsFormulario} type="text" placeholder='Categoria'/>
                        </fieldset>

                        <fieldset>
                            <input className={S.inputsFormulario} type="text" placeholder='Autor'/>
                        </fieldset>

                        <fieldset>
                            <input className={S.inputsFormulario} type="text" placeholder='Link da Imagem'/>
                        </fieldset>

                        <input className={S.inputButton} type="submit" value='Doar'/>

                </form>
            </section>

        </section>
    )
}