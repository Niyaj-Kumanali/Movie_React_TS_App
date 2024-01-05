import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useRef, useState } from 'react';
const Navbar = () => {
  const [inputValue, setInputValue] = useState('');
  const searchInputRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const genres = ['Action', 'Comedy', 'Drama', 'Thriller', 'Adventure'];
  const actors = [
    'Tom Hanks',
    'Leonardo DeCaprio',
    'Brad Pitt',
    'Robert De Nitro',
  ];

  const handleSearchBtn = () => {
    searchInputRef.current.classList.toggle('hideSearch');
    inputRef.current && inputRef.current.focus();
    // }
  };

  const handleSeachKeyDown = (event: { key: string }) => {
    if (event.key === 'Enter') {
      navigate('/all/page/1', { state: inputValue });
      setInputValue('');
      searchInputRef.current.classList.add('hideSearch');
    }
  };
  const handleSearchChange = (event: any) => {
    setInputValue(event.target.value.toLowerCase());
  };

  return (
    <div id="navbar">
      <div className="nav-main">
        <div className="nav-left" onClick={()=> searchInputRef.current.classList.add('hideSearch')}>
          <Link to={'/'}>
            <div className="nav-logo">
              <img
                src="https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/09/logo_c.png"
                alt=""
              />
            </div>
          </Link>
        </div>
        <div className="nav-right" >
          <div className="nav-items">
            <div className="nav-link">
              <Link to={'/'}>
                <p>
                  <span>Movie picker</span>
                </p>
              </Link>
            </div>
            <div className="nav-link genres">
              <p>
                <span>
                  Top Genres <i className="ri-arrow-drop-down-line"></i>
                </span>
              </p>
              <div className="top-genres-hover">
                {genres.map((genre, index) => (
                  <Link to={`/${genre}/page/1`} key={index}>
                    <span>{genre}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="nav-link actors">
              <p>
                <span>
                  Top Actors <i className="ri-arrow-drop-down-line"></i>
                </span>
              </p>
              <div className="top-actors-hover">
                {actors.map((actor, index) => (
                  <Link to={`/${actor}/page/1`} key={index}>
                    <span>{actor}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="nav-link">
              <Link to={'/blog/'}>
                <p>
                  <span>Blog</span>
                </p>
              </Link>
            </div>
          </div>
          <div className="nav-icons">
            <button className="search-btn nav-link">
              <i className="ri-search-line" onClick={handleSearchBtn}></i>
              <div className="search-input hideSearch" ref={searchInputRef}>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  placeholder="Search"
                  onChange={handleSearchChange}
                  onKeyDown={handleSeachKeyDown}
                />
              </div>
            </button>
            <a href={'https://www.facebook.com'}>
              <button className="fb-btn nav-link">
                <i className="ri-facebook-circle-fill"></i>
              </button>
            </a>
            <a href={'https://www.instagram.com'}>
              <button className="insta-btn nav-link">
                <i className="ri-instagram-line"></i>
              </button>
            </a>
            <a href={'https://www.youtube.com'}>
              <button className="yt-btn nav-link">
                <i className="ri-youtube-fill"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
