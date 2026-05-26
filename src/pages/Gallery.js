const otters = [
  { name: "Buddy", caption: "Ready for the next photo upload.", icon: "🦦" },
  { name: "Pebbles", caption: "A placeholder card for the Ottergram gallery.", icon: "🌅" },
  { name: "River", caption: "Built with reusable React card markup.", icon: "🌊" },
  { name: "Scout", caption: "The layout can be expanded with real images later.", icon: "📸" }
];

function Gallery() {
  return (
    <section className="content-section" aria-labelledby="gallery-heading">
      <p className="eyebrow">Gallery Route</p>
      <h2 id="gallery-heading">Ottergram Gallery</h2>
      <p>
        The gallery page uses an array of items and maps them into cards. This keeps the code simple now
        while making the app easier to update with actual image files later.
      </p>
      <div className="gallery-grid">
        {otters.map((otter) => (
          <article className="otter-card" key={otter.name}>
            <div className="otter-image" role="img" aria-label={`${otter.name} placeholder image`}>
              <span aria-hidden="true">{otter.icon}</span>
            </div>
            <h3>{otter.name}</h3>
            <p>{otter.caption}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
