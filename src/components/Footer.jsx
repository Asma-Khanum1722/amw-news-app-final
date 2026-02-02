import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="footer-wrapper">
        <div className="footer-main">
          <div className="footer-brand">
            <h3 className="footer-logo">AMW</h3>
            <p className="footer-tagline">Authentic Media Wire</p>
          </div>
          
          <div className="footer-nav">
            <div className="footer-col">
              <span className="footer-col-title">Navigate</span>
              <a href="/">Home</a>
              <a href="/news">News</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-col">
              <span className="footer-col-title">Categories</span>
              <a href="/news">World</a>
              <a href="/news">Business</a>
              <a href="/news">Technology</a>
              <a href="/news">Sports</a>
            </div>
            <div className="footer-col">
              <span className="footer-col-title">Legal</span>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Authentic Media Wire. All rights reserved.
          </p>
          <p className="footer-credit">
          Made with magic by <span>Asma</span>
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
