const ITEMS = [
  'SOMOS LO QUE SOMOS', 'ZACA TV', 'LUNES A VIERNES', '11 AM · 12:30 PM',
  'TEMPORADA 2', 'GIACOMO BENAVIDES', 'DOMENICO BENAVIDES', 'GIA MEIER',
  'ANDREA NORIEGA', 'MAFE DELGADO',
]

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-inner">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}
