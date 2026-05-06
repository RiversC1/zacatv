export default function Nav() {
  return (
    <nav>
      <a className="nav-logo" href="#"><span>ZACA</span>TV</a>
      <ul className="nav-links">
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#equipo">Equipo</a></li>
        <li><a href="#horario">Horario</a></li>
        <li><a href="#episodios">Episodios</a></li>
        <li>
          <a
            href="https://www.youtube.com/@ZacatvOnline/streams"
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
          >
            ▶ Ver en vivo
          </a>
        </li>
      </ul>
    </nav>
  )
}
