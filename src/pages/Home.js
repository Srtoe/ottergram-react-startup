import FeatureCard from "../components/FeatureCard";

function Home() {
  return (
    <section className="hero-section" aria-labelledby="home-heading">
      <div className="hero-copy">
        <p className="eyebrow">Create React App + Routing</p>
        <h2 id="home-heading">A simple React startup page for Ottergram</h2>
        <p>
          This page was created as a starter React application. It uses a Create React App
          structure, basic navigation, and route-based pages to show how a single-page app
          can change views without reloading the entire website.
        </p>
        <a className="primary-button" href="/gallery">View the Gallery</a>
      </div>
      <div className="hero-card" aria-label="Ottergram project summary">
        <span className="hero-emoji" aria-hidden="true">🌊</span>
        <h3>Project Goal</h3>
        <p>Build a clean startup page that can later be customized into a full Ottergram photo application.</p>
      </div>
      <div className="feature-grid">
        <FeatureCard title="React Components" body="The page is split into reusable parts so the layout is easier to maintain." />
        <FeatureCard title="React Router" body="The navigation links connect the Home, Gallery, and About pages." />
        <FeatureCard title="Flexbox Layout" body="The cards and navigation use flexible layout rules for a clean responsive design." />
      </div>
    </section>
  );
}

export default Home;
