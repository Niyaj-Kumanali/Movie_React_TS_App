import { useEffect, useRef, useState } from 'react';
import './MovieDesc.css';
const MovieDesc = ({movie}) => {
  const [currentDesc, setCurrentDesc] = useState({
    desc: true,
    details: false,
    actors: false,
  });
  const descRef = useRef(null);
  const detailRef = useRef(null);
  const actorRef = useRef(null);

  useEffect(()=> {
    actorRef.current.classList.remove('glow');
    detailRef.current.classList.remove('glow');
    descRef.current.classList.add('glow');
  }, [])
  return (
    <div className="movie-description">
      <div className="movie-desc-image" style={{backgroundImage: `url(${movie.primaryImage.imageUrl})`}}>
        <div className="movie-desc-img-top">
          <h2>{movie.originalTitleText.text}</h2>
          <h4>Movie sub title</h4>
        </div>
        <div className="movie-desc-img-bottom">
          <div className="movie-desc-genres">{movie.genre}</div>
          <div className="movie-details">
            <p className="movie-duration">1h 49min | PG | {movie.releaseYear.year}</p>
            <p className="click-to-see">Click an icon to see more</p>
            <div className="details-nav">
              <button
                ref={descRef}
                onClick={() => {
                  setCurrentDesc({
                    desc: true,
                    details: false,
                    actors: false,
                  });
                  actorRef.current.classList.remove('glow');
                  detailRef.current.classList.remove('glow');
                  descRef.current.classList.add('glow');
                }}
              >
                <i className="fa-solid fa-quote-right"></i> <br />
                {currentDesc.desc && <i className="ri-arrow-up-s-fill"></i>}
              </button>
              <button
                ref={detailRef}
                onClick={() => {
                  setCurrentDesc({
                    desc: false,
                    details: true,
                    actors: false,
                  });
                  actorRef.current.classList.remove('glow');
                  detailRef.current.classList.add('glow');
                  descRef.current.classList.remove('glow');
                }}
              >
                <i className="fa-regular fa-file-lines"></i> <br />
                {currentDesc.details && <i className="ri-arrow-up-s-fill"></i>}
              </button>
              <button
                ref={actorRef}
                onClick={() => {
                  setCurrentDesc({
                    desc: false,
                    details: false,
                    actors: true,
                  });
                  actorRef.current.classList.add('glow');
                  detailRef.current.classList.remove('glow');
                  descRef.current.classList.remove('glow');
                }}
              >
                <i className="fa-solid fa-user-group"></i> <br />
                {currentDesc.actors && <i className="ri-arrow-up-s-fill"></i>}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="movie-desc-content">
        <span className="desc">
          {currentDesc.desc ? (
            <p>
              <i className="fa-solid fa-quote-right"></i>
              An award-winning cynical journalist, Lloyd Vogel, begrudgingly
              accepts an assignment to write an Esquire profile piece on the
              beloved television icon Fred Rogers. After his encounter with
              Rogers, Vogel's perspective on life is transformed.
            </p>
          ) : currentDesc.details ? (
            <div className="movie-info">
              <p><span>Duration</span><span>1h 49min</span></p>
              <p><span>Certifications</span><span>PG</span></p>
              <p><span>Director</span><span>Niyaj</span></p>
              <p><span>Budget</span><span>$45000</span></p>
              <p><span>Revenue</span><span>$450000</span></p>
              <p><span>Coutry</span><span>US</span></p>
            </div>
          ) : (
            <p>
              actors <br /> Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Nostrum autem quaerat, harum obcaecati quidem neque pariatur
              totam labore quisquam. Debitis beatae voluptatum quas, quam ea et
              iusto cupiditate enim incidunt officiis doloribus! Inventore iste
              sunt sapiente earum ex autem ad dolore aliquid vitae maxime? Amet
              necessitatibus facilis rerum molestias sint quaerat dolor ea earum
              id delectus optio incidunt, cumque repellendus, enim praesentium
              reprehenderit voluptates aperiam porro soluta recusandae esse
              debitis ipsa dolores? Nobis saepe nam minima iste ea. Cupiditate
              impedit consequuntur, minus atque velit saepe nihil maiores sint
              eveniet esse sit, aliquid facilis modi aliquam explicabo
              quibusdam, repellat cum deleniti placeat nemo officiis et rem
              quia. Voluptates et, itaque id optio nulla magnam non quas officia
              deserunt error? Est sunt fuga repellat doloremque obcaecati, iste
              ea ipsam quisquam, et, ad sequi omnis eius. Maxime consequuntur
              inventore voluptate beatae, ratione, aperiam repudiandae optio
              soluta atque nesciunt possimus, itaque neque eius delectus!
            </p>
          )}
        </span>
      </div>
    </div>
  );
};

export default MovieDesc;
