import * as React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <section className="footer-section">
        <h3>About Us</h3>
        <a href="/about/history">Our History</a> 
        <a href="/about/team">Our Team</a> 
      </section>
      <section className="footer-section">
        <h3>Products</h3>
        <a href="/products/software">Software</a> 
        <a href="/products/hardware">Hardware</a> 
      </section>
      <section className="footer-section">
        <h3>Support</h3>
        <a href="/support/faq">FAQs</a> 
        <a href="/support/contact">Contact Us</a> 
      </section>
      <section className="footer-section">
        <h3>Legal</h3>
        <a href="/legal/terms">Terms of Service</a> 
        <a href="/legal/privacy">Privacy Policy</a> 
      </section>
    </footer>
  );
}

export default Footer;
