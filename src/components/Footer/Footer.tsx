import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <div id="Footer">
        <div className="footer-left">
            <div className="copyright"><span className='copyright-icon'><i className="ri-copyright-line"></i></span><span>copyright 2023 - pickmovieforme.com</span></div>
        </div>
        <div className="footer-right">
            <Link to={'/contact-us'}><div className="contact footer-link">contact</div></Link>
            <Link to={'/privacy-policy'}><div className="privacy footer-link">privacy policy</div></Link>
        </div>
    </div>
  )
}

export default Footer