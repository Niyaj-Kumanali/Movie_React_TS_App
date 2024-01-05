import { useEffect, useRef, useState } from 'react';
import './MovieRecommend.css';

const MovieRecommend = () => {
  const [currentRecommendation, setCurrentRecommendation] = useState(1);
  const backBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  useEffect(() => {
    currentRecommendation <= 2 && backBtnRef.current.classList.add('hide');
  }, []);

  return (
    <div id="MovieRecommedation">
      <div className="movieRecommedation">
        <div className="movie-recommend-heading">
          {currentRecommendation == 1
            ? '1. How are you today?'
            : currentRecommendation == 2
            ? '2. What comes closest to your occasion?'
            : currentRecommendation == 3
            ? '3. Please choose any genre you’re interested in.'
            : '4. How old would you like the movie to be?'}
        </div>
        {currentRecommendation == 1 ? (
          <div className="smiles recommend">
            <button>
              <i className="fa-regular fa-face-smile"></i>
            </button>
            <button>
              <i className="fa-regular fa-face-meh"></i>
            </button>
            <button>
              <i className="fa-regular fa-face-frown-open"></i>
            </button>
          </div>
        ) : currentRecommendation == 2 ? (
          <div className="recommend">options 2</div>
        ) : currentRecommendation == 3 ? (
          <div className="recommend">options 3</div>
        ) : (
          <div className="recommend">Thank you</div>
        )}
        <div
          ref={backBtnRef}
          className="back-btn"
          onClick={() => {
            currentRecommendation > 1 &&
              setCurrentRecommendation((prev) => prev - 1);
            currentRecommendation <= 2 &&
              backBtnRef.current.classList.add('hide');
            currentRecommendation <= 4 &&
              nextBtnRef.current.classList.remove('hide');
          }}
        >
          Back
        </div>
        <div
          ref={nextBtnRef}
          className="next-btn"
          onClick={() => {
            currentRecommendation < 4 &&
              setCurrentRecommendation((prev) => prev + 1);
            currentRecommendation < 4 &&
              backBtnRef.current.classList.remove('hide');
            currentRecommendation == 3 &&
              nextBtnRef.current.classList.add('hide');
          }}
        >
          NEXT
        </div>
      </div>
    </div>
  );
};

export default MovieRecommend;
