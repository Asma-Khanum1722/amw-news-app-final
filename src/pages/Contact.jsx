import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-sub">We'd love to hear from you! Reach out for feedback, partnership, or support.</p>
      <div className="contact-details">
        <div className="contact-card">
          <h2>Email</h2>
          <p>info@amwnews.com</p>
        </div>
        <div className="contact-card">
          <h2>Phone</h2>
          <p>+1 555 404 0000</p>
        </div>
        <div className="contact-card">
          <h2>Address</h2>
          <p>1725 Slough Avenue, Suite 200, Scranton Business Park, Scranton, PA</p>
        </div>
      </div>
      <div className="contact-social">
        <span>Follow us:</span>
  <a href="#" className="amw-btn contact-link"><i className="bi bi-twitter" style={{marginRight: '6px'}}></i>Twitter</a>
  <a href="#" className="amw-btn contact-link"><i className="bi bi-facebook" style={{marginRight: '6px'}}></i>Facebook</a>
  <a href="#" className="amw-btn contact-link"><i className="bi bi-instagram" style={{marginRight: '6px'}}></i>Instagram</a>
      </div>
    </section>
  );
};

export default Contact;