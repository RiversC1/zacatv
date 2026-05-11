import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <Link className="nav-logo" to="/"><span>ZACA</span>TV</Link>
      <ul className="nav-links">
        <li><a href="/#sobre">Sobre</a></li>
        <li><a href="/#equipo">Equipo</a></li>
        <li><a href="/#horario">Horario</a></li>
        <li><a href="/#episodios">Episodios</a></li>
        <li><Link to="/watch" className="nav-cta">▶ Ver en vivo</Link></li>
      </ul>
    </nav>
  )
}
