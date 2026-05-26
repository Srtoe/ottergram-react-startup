function FeatureCard({ title, body }) {
  return (
    <article className="feature-card">
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

export default FeatureCard;
