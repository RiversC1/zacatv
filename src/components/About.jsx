const TAGS = ['Humor', 'Lifestyle', 'Talk show', 'En vivo', 'Streaming', 'Perú']

export default function About() {
  return (
    <section className="about reveal" id="sobre">
      <div className="about-visual">
        <div className="about-card">
          <div className="about-card-stat">159K<small>+</small></div>
          <div className="about-card-label">Suscriptores en su primer año</div>
          <div className="about-card-row">
            <div>
              <div className="about-card-stat" style={{ fontSize: '3rem' }}>20K</div>
              <div className="about-card-label">Espectadores en vivo / ep.</div>
            </div>
            <div>
              <div className="about-card-stat" style={{ fontSize: '3rem' }}>T2</div>
              <div className="about-card-label">Temporada actual</div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-text">
        <div className="section-label">Sobre el show</div>
        <h2 className="section-title">El streaming<br />más auténtico</h2>
        <div className="section-divider" />
        <p>
          <strong>Somos Lo Que Somos</strong> es el programa diario de <strong>Zaca TV</strong> que
          conecta con la juventud peruana desde el humor, la honestidad y la conversación real. Un
          espacio donde nada está actuado y todo puede pasar.
        </p>
        <p>
          Creado por Giacomo Benavides, el show debutó en marzo de 2025 y en solo meses se convirtió
          en un fenómeno del streaming peruano, con episodios que acumulan cientos de miles de vistas
          y una comunidad que se siente parte de cada transmisión.
        </p>
        <p>
          En su segunda temporada (desde marzo 2026), el elenco se renueva pero la esencia sigue
          intacta: autenticidad, risas y conexión real.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          {TAGS.map((tag) => (
            <span key={tag} className="about-tag">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
