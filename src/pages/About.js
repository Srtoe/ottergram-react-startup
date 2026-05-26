function About() {
  return (
    <section className="content-section" aria-labelledby="about-heading">
      <p className="eyebrow">About Route</p>
      <h2 id="about-heading">About This React Project</h2>
      <p>
        This React project was created to meet the Week 1 assignment goal of setting up a React application,
        adding basic navigation, and preparing a startup page that can be used as a foundation for later work.
      </p>
      <p>
        The main lesson from building this starter page is that React keeps the user interface organized by
        splitting the application into components. The routing also makes the app feel more like a complete
        website because each navigation link displays a different view in the same application shell.
      </p>
      <div className="callout-box">
        <strong>Next improvement:</strong> add real otter photos, captions, search, and a larger image preview when a gallery card is selected.
      </div>
    </section>
  );
}

export default About;
