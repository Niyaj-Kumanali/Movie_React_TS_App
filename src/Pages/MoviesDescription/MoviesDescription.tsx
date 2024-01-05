import './MoviesDescription.css';
import MovieDesc from '../../components/MovieDescribe/MovieDesc';
import WatchMovie from '../../components/WatchMovie/WatchMovie';
import MovieBanner from '../../components/MovieBanner/MovieBanner';
import MovieShare from '../../components/MovieShare/MovieShare';
import { useLocation } from 'react-router-dom';

const MoviesDescription = () => {
  const location = useLocation();
  const movie = location.state;
  
  return (
    <div id="Movie-Description">
      <div className="movie-Description-container">
        <h1 className="movie-description-heading">{movie.originalTitleText.text}</h1>
        <MovieDesc movie={movie} />
        <WatchMovie movie={movie} />
        <MovieBanner image={movie.primaryImage.imageUrl}/>
        <MovieShare />
      </div>
    </div>
  );
};

export default MoviesDescription;
