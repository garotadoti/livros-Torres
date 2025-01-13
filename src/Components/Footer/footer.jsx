import S from './footer.module.scss'
import facebook from '../../assets/face.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import linkedin from '../../assets/linkedin-icon-2048x2048-yx2cmt11 2.png'
import instagram from '../../assets/insta.png'


export default function Footer() {
    return (
        <footer className={S.footer}>
            <section className={S.sociais}>
                <p className={S.telefone}>4002-8922</p>
                <section className={S.logoRedes}>
                    <a target='blank' href="https://www.facebook.com/share/12D2sBGxgD7/"><img src={facebook} alt="Logotipo linkável do facebook" /></a>
                    <a target='blank' href="https://x.com/devdacaps"><img src={twitter} alt="Logotipo linkável do twitter" /></a>
                    <a target='blank' href="https://www.youtube.com/@VaiNaWeb"><img src={youtube} alt="Logotipo linkável do youtube" /></a>
                    <a target='blank' href="https://www.linkedin.com/in/sarah-torres-236250238/"><img src={linkedin} alt="Logo linkável do linkedin" /></a>
                    <a target='blank' href="https://www.instagram.com/_garotadoti_/"><img src={instagram} alt="Logo linkável do instagram" /></a>
                </section>
            </section>
            <section className={S.info}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}