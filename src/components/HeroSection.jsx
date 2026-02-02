import { Link } from "react-router-dom";
import "../components/hero.css";
import heroVideo from "../assets/News-Vid123.mp4";

const Hero = () => {
  return (
    <>
      <section id="home" className="hero-grid">
        <div className="hero-section">
          <div className="video-div">
            <video autoPlay muted loop playsInline>
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>
          <div className="vid-cover"></div>
        </div>

        <div className="hero-content">
          <div className="hero-overline">
            <span className="overline-bar"></span>
            <span className="overline-text">AUTHENTIC MEDIA WIRE</span>
            <span className="overline-bar"></span>
          </div>
          <h1 className="hero-heading">
            The Future of
            <span className="hero-heading-accent">News Consumption</span>
          </h1>
          <p className="hero-description">
            Experience journalism reimagined. Curated stories from around the globe, 
            delivered with clarity and precision.
          </p>
          <div className="hero-cta">
            <Link className="btn-primary" to="/news">
              <span>Explore Stories</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
           
          </div>
          <div className="hero-metrics">
            <div className="metric">
              <span className="metric-value">2M+</span>
              <span className="metric-label">Readers</span>
            </div>
            <div className="metric">
              <span className="metric-value">150+</span>
              <span className="metric-label">Countries</span>
            </div>
            <div className="metric">
              <span className="metric-value">24/7</span>
              <span className="metric-label">Coverage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="features-header">
          <span className="section-tag">WHY CHOOSE US</span>
          <h2 className="section-title">Built for the Modern Reader</h2>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-number">01</div>
            <h3>Real-Time Updates</h3>
            <p>Breaking news delivered instantly as events unfold across the globe.</p>
          </div>
          <div className="feature-card">
            <div className="feature-number">02</div>
            <h3>Global Network</h3>
            <p>Correspondents in 150+ countries ensuring comprehensive world coverage.</p>
          </div>
          <div className="feature-card">
            <div className="feature-number">03</div>
            <h3>Verified Sources</h3>
            <p>Every story fact-checked by our award-winning editorial team.</p>
          </div>
          <div className="feature-card">
            <div className="feature-number">04</div>
            <h3>Personalized Feed</h3>
            <p>AI-curated content tailored to your interests and reading habits.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
