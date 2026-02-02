import "./about.css";

const About = () => {
  return (
    <section className="about-container">
      <h1 className="about-heading">About Us</h1>
      <p className="about-sub">Authentic Media Wire: Your trusted source for news and stories.</p>
      <div className="about-content">
        <h2>Our Mission</h2>
        <p>
          We strive to deliver accurate, timely, and engaging news to our audience. Our platform is designed to keep you informed and connected to the world around you, with a focus on clarity, integrity, and community.
        </p>
        <h2>Why Choose Us?</h2>
        <p>
          Our team of dedicated journalists and editors work around the clock to bring you the latest updates, in-depth analysis, and inspiring stories. We value transparency, diversity, and the power of information.
        </p>
      </div>
      <div className="about-team">
        <strong>Meet the Team:</strong> <br />
        Steve Carell (Editor-in-Chief), Rainn Wilson  (Senior Reporter), Janice Sean (Community Manager)
      </div>
    </section>
  );
};

export default About;
