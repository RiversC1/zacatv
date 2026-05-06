const MEMBERS = [
  { id: 'giacomo',  name: 'GIACOMO',  fullName: 'Giacomo Benavides',  role: 'Conductor & Fundador' },
  { id: 'domenico', name: 'DOMENICO', fullName: 'Domenico Benavides', role: 'Co-conductor' },
  { id: 'gia',      name: 'GIA',      fullName: 'Gia Meier',          role: 'Conductora' },
  { id: 'andrea',   name: 'ANDREA',   fullName: 'Andrea Noriega',     role: 'Conductora' },
  { id: 'mafe',     name: 'MAFE',     fullName: 'Mafe Delgado',       role: 'Conductora' },
]

export default function Team() {
  return (
    <section className="team reveal" id="equipo">
      <div className="section-label">El elenco · Temporada 2</div>
      <h2 className="section-title">Conoce al equipo</h2>
      <div className="section-divider" />
      <div className="team-grid">
        {MEMBERS.map((m) => (
          <div key={m.id} className="team-card">
            <img src={`/${m.id}.jpg`} alt={m.fullName} className="team-photo" />
            <div className="team-name">{m.name}</div>
            <div className="team-role" style={{ marginBottom: '.3rem' }}>{m.fullName}</div>
            <div className="team-role" style={{ color: 'rgba(255,255,255,0.45)' }}>{m.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
