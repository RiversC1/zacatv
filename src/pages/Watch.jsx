const CHANNEL_ID = 'UCX8V5HU_bbZSxDuUeNMKC2w'

export default function Watch() {
  return (
    <section className="watch-page">
      <div className="section-label">Transmisión en vivo</div>
      <h2 className="section-title">VER EN VIVO</h2>
      <div className="section-divider" />
      <div className="watch-embed-wrap">
        <iframe
          src={`https://www.youtube.com/embed/live_stream?channel=${CHANNEL_ID}&autoplay=1`}
          title="Zaca TV Live Stream"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <p className="watch-schedule">
        En vivo · Lun – Vie · 11:00 AM – 12:30 PM (PET)
      </p>
    </section>
  )
}
