import './MovieShare.css';
const MovieShare = () => {
  return (
    <div id="MovieShare">
      <h1>SHARE THIS ON:</h1>
      <div className="shareButtons">
        <a href="https://www.facebook.com" className="shareFB-btn">
          <i className="fa-brands fa-facebook-f"></i>
          <span>Facebook</span>
        </a>
        <a href="https://www.twitter.com" className="shareX-btn">
          <i className="fa-brands fa-twitter"></i>
          <span>Twitter</span>
        </a>
        <a href="https://www.reddit.com" className="shareReddit-btn">
          <i className="fa-brands fa-reddit-alien"></i>
          <span>Reddit</span>
        </a>
        <a href="https://www.pinterest.com" className="sharePinterest-btn">
          <i className="fa-brands fa-pinterest-p"></i>
          <span>Pinterest</span>
        </a>
        <a href="https://www.whatsapp.com" className="shareWhatsapp-btn">
        <i className="fa-brands fa-whatsapp"></i>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default MovieShare;
