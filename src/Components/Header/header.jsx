import logo from '../../assets/logo.png'
import busca from '../../assets/search.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Inicio from '../../Pages/Inicio/inicio'
import Doados from '../../Pages/Doados/doados'
import QueroDoar from '../../Pages/QueroDoar/querodoar'
import * as S from  './header.module.scss'


export default function header() {
return (
    <BrowserRouter>
      <header className={S.header1}>
        <section className={S.boxLogo}>
          <img className={S.Logo} src={logo} alt="logo do site Livro" />
          <h1 className={S.titulo}>Livros Vai na Web</h1>
        </section>
        <nav className={S.boxMenu}>
          <ul>
            <li>
              {" "}
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/Doados">Livros Doados</Link>
            </li>
            <li>
              <Link to="/QueroDoar">Quero Doar</Link>{" "}
            </li>
          </ul>
        </nav>
        <div className={S.boxInput}>
          <input type="text" placeholder="O que você procura?" />
          <img className={S.boxBusca} src={busca} alt="busca de pesquisa" />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/QueroDoar" element={<QueroDoar />} />
        <Route path="/Doados" element={<Doados />} />
      </Routes>

      <main></main>
    </BrowserRouter>
  );
}