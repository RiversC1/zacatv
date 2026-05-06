const EPISODES = [
  {
    href: 'https://www.youtube.com/watch?v=ftXhNgRP-hw',
    thumb: { gradient: 'linear-gradient(135deg,#1ec8c8 0%,#4b1fa8 100%)', emoji: '🎭' },
    label: '+ 301K vistas',
    title: 'El episodio de Pataclaun',
    desc: 'El elenco se disfrazó de los personajes del clásico peruano en uno de los episodios más queridos de la temporada 1.',
  },
  {
    href: 'https://www.youtube.com/watch?v=tXdb83eEtuE',
    thumb: { gradient: 'linear-gradient(135deg,#ff3fa4 0%,#4b1fa8 100%)', emoji: '🎨' },
    label: '+ 199K vistas',
    title: 'Intensamente',
    desc: 'Una versión llena de humor y caos de la película favorita del elenco, con disfraces y personajes al estilo Zaca TV.',
  },
  {
    href: 'https://www.youtube.com/watch?v=HLlAFOAwMEU',
    thumb: { gradient: 'linear-gradient(135deg,#ffe135 0%,#ff3fa4 100%)', emoji: '⚡' },
    label: 'Temporada 2 · 2026',
    title: 'El regreso del equipo',
    desc: 'Giacomo y Domenico presentan al nuevo elenco con Gia, Andrea y Mafe en el estreno de la segunda temporada.',
  },
]

export default function Episodes() {
  return (
    <section className="episodes reveal" id="episodios">
      <div className="section-label">Episodios destacados</div>
      <h2 className="section-title">LO MÁS VISTO</h2>
      <div className="section-divider" />
      <div className="episodes-grid">
        {EPISODES.map((ep) => (
          <a key={ep.href} className="ep-card" href={ep.href} target="_blank" rel="noreferrer">
            <div className="ep-thumb" style={{ background: ep.thumb.gradient }}>
              {ep.thumb.emoji}
            </div>
            <div className="ep-body">
              <div className="ep-label">{ep.label}</div>
              <div className="ep-title">{ep.title}</div>
              <div className="ep-desc">{ep.desc}</div>
            </div>
          </a>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a
          className="btn btn-primary"
          href="https://www.youtube.com/@ZacatvOnline/streams"
          target="_blank"
          rel="noreferrer"
        >
          Ver todos los episodios ↗
        </a>
      </div>
    </section>
  )
}
