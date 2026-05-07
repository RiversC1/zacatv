import { ASSETS_URL } from '../config'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />

      <svg className="shape shape-star" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 5 L47 30 L72 30 L52 46 L59 71 L40 56 L21 71 L28 46 L8 30 L33 30Z" fill="#ffe135" opacity="0.9" />
      </svg>
      <svg className="shape shape-blob" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 10 Q90 20 110 50 Q130 80 100 100 Q70 120 40 105 Q10 90 15 55 Q20 20 60 10Z" fill="#ff3fa4" opacity="0.85" />
      </svg>
      <svg className="shape shape-x" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="5" y1="5" x2="55" y2="55" stroke="#1ec8c8" strokeWidth="8" strokeLinecap="round" />
        <line x1="55" y1="5" x2="5" y2="55" stroke="#1ec8c8" strokeWidth="8" strokeLinecap="round" />
      </svg>
      <svg className="shape shape-tri" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="45,5 85,80 5,80" fill="#4b1fa8" opacity="0.9" />
        <polygon points="45,15 75,72 15,72" fill="#ff3fa4" opacity="0.6" />
      </svg>

      <div className="hero-content">
        <div className="live-badge">
          <span className="live-dot" /> En vivo Lun–Vie · 11 AM
        </div>
        <img src={`${ASSETS_URL}/banner.png`} alt="Somos Lo Que Somos" className="hero-banner" />
        <h1 className="hero-title">
          <span className="line1">SOMOS</span>
          <br />
          <span className="line2">LO QUE</span>
          <br />
          <span className="line3">SOMOS</span>
        </h1>
        <p className="hero-sub">
          Una producción de Zaca TV &nbsp;·&nbsp; El streaming más auténtico del Perú
        </p>
        <div className="hero-ctas">
          <a
            className="btn btn-primary"
            href="https://www.youtube.com/@ZacatvOnline/streams"
            target="_blank"
            rel="noreferrer"
          >
            ▶ Ver en YouTube
          </a>
          <a className="btn btn-outline" href="#sobre">
            Conocer más ↓
          </a>
        </div>
      </div>
    </section>
  )
}
