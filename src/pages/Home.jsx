import HeroSection from '../components/HeroSection'
import "./about.css"
import "./contact.css"

const Home = () => {
  return (
    <>
      <HeroSection/>
      
      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-wrapper">
          <div className="about-header">
            <span className="section-tag">ABOUT US</span>
            <h2 className="about-title">Redefining Digital Journalism</h2>
            <p className="about-intro">
              At Authentic Media Wire, we believe in the power of truth. Our mission is to 
              deliver unbiased, thoroughly researched news that empowers readers to make 
              informed decisions.
            </p>
          </div>
          
          <div className="about-grid">
            <div className="about-card">
              <span className="about-card-label">OUR MISSION</span>
              <p>
                To uphold the highest standards of journalism while embracing innovation. 
                We're committed to transparency, accuracy, and delivering news that matters.
              </p>
            </div>
            <div className="about-card">
              <span className="about-card-label">OUR VISION</span>
              <p>
                A world where everyone has access to reliable information. We envision 
                journalism that bridges divides and fosters understanding across cultures.
              </p>
            </div>
            <div className="about-card">
              <span className="about-card-label">OUR VALUES</span>
              <p>
                Integrity in every story. Independence in every investigation. 
                Excellence in every piece we publish. These principles guide everything we do.
              </p>
            </div>
          </div>
          
          <div className="about-team">
            <span className="about-card-label">LEADERSHIP</span>
            <p className="team-quote">"Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me."</p>
            <div className="team-list">
              <div className="team-member">
                <span className="member-name">Michael Scott</span>
                <span className="member-role">World's Best Editor-in-Chief</span>
              </div>
              <div className="team-member">
                <span className="member-name">Dwight K. Schrute</span>
                <span className="member-role">Assistant to the Regional Reporter</span>
              </div>
              <div className="team-member">
                <span className="member-name">Jim Halpert</span>
                <span className="member-role">Community Director</span>
                <span className="member-note">Currently looking at camera</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-wrapper">
          <div className="contact-header">
            <span className="section-tag">GET IN TOUCH</span>
            <h2 className="contact-title">Let's Start a Conversation</h2>
            <p className="contact-intro">
              Have a story tip? Want to collaborate? We'd love to hear from you.
            </p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-card">
              <span className="contact-card-label">EMAIL</span>
              <a href="mailto:info@amwnews.com" className="contact-link">info@amwnews.com</a>
            </div>
            <div className="contact-card">
              <span className="contact-card-label">PHONE</span>
              <a href="tel:+15554040000" className="contact-link">+1 555 404 0000</a>
            </div>
            <div className="contact-card">
              <span className="contact-card-label">HEADQUARTERS</span>
              <p className="contact-address">
                1725 Slough Avenue, Suite 200<br/>
                Scranton Business Park<br/>
                Scranton, PA 18503
              </p>
              <span className="address-hint">Near a certain paper company</span>
            </div>
          </div>
          
          <div className="contact-social">
            <span className="contact-card-label">FOLLOW US</span>
            <div className="social-links">
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home