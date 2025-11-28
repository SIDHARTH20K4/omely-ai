import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__heading">Your Brain Isn&apos;t Broken.</h1>
        <p className="hero__subheading">Your Learning Method Is.</p>
        <div className="hero__badge-row">
          <span className="hero__badge">Built on cognitive science</span>
        </div>
      </div>
    </section>
  );
}