const DAYS = [
  { label: 'Lun', active: true },
  { label: 'Mar', active: true },
  { label: 'Mié', active: true },
  { label: 'Jue', active: true },
  { label: 'Vie', active: true },
  { label: 'Sáb', active: false },
  { label: 'Dom', active: false },
]

export default function Schedule() {
  return (
    <section className="schedule reveal" id="horario">
      <div className="schedule-inner">
        <div className="schedule-clock">11:00</div>
        <div className="schedule-detail">
          <div className="section-label">Horario de transmisión</div>
          <h2 className="section-title">
            EN VIVO<br />CADA MAÑANA
          </h2>
          <p>
            De 11:00 AM a 12:30 PM, únete a la mesa más animada de internet. Cada episodio trae
            conversaciones frescas, invitados sorpresa, secciones fijas y mucho más en el canal
            oficial de YouTube de Zaca TV.
          </p>
          <div className="schedule-days">
            {DAYS.map((d) => (
              <span key={d.label} className={`day-pill${d.active ? ' active' : ''}`}>
                {d.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
