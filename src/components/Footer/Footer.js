import "./Footer.css";
import { FaFacebookF } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { FaOdnoklassniki } from 'react-icons/fa';
import { FaViber } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="allfooter">
          <div className="footer-logo">
            <div><a href="/">CHAIR</a></div>
            <div className="footer-text">
              <h1>Stay in touch.</h1>
              <p>Sign up to receive inspirational updates related to product enhancements and the latest workplace trends.</p>
            </div>
          </div>

          <div className="footer-a">
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/chairs">Chair</a></li>
              <li><a href="/chairs">Desks</a></li>
              <li><a href="/chairs">Storage</a></li>
              <li><a href="/chairs">Accessories</a></li>
              <li><a href="/chairs">Contacts</a></li>
            </ul>
          </div>
        </div>
        <section>
          <FaFacebookF /><FaFacebookMessenger /><FaOdnoklassniki /> <FaViber /><FaTwitter /><FaYoutube />
        </section>
      </div>
    </footer>
  );
}

export default Footer;