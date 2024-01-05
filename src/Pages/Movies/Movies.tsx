import { useEffect, useMemo, useState } from 'react';
import Movie from '../../components/Movie/Movie';
import './Movies.css';
import { action } from '../../data/action';
import { thriller } from '../../data/thriller';
import { drama } from '../../data/drama';
import { adventure } from '../../data/adventure';
import { comedy } from '../../data/comedy';
import { Link, useLocation } from 'react-router-dom';

const Movies = ({ genre, actor }: { genre: string; actor: string }) => {
  const [movieData, setMovieData] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(24);
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const [value, setValue] = useState(location.state);
  const [filteredMovies, setFilteredMovies] = useState<any[]>([]);

  const movies = () => {
    genre = genre.toLowerCase();
    actor = actor.toLowerCase();
    const allMovies = [
      ...action,
      ...drama,
      ...comedy,
      ...thriller,
      ...adventure,
    ];
    if (genre === 'action') {
      return action;
    } else if (genre === 'thriller') {
      return thriller;
    } else if (genre === 'comedy') {
      return comedy;
    } else if (genre === 'drama') {
      return drama;
    } else if (genre === 'adventure') {
      return adventure;
    } else if (actor === 'tom hanks') {
      return allMovies.filter((movie) =>
        movie.title.originalTitleText.text.toLowerCase().includes('t')
      );
    } else if (actor === 'leonardo decaprio') {
      return allMovies.filter((movie) =>
        movie.title.originalTitleText.text.toLowerCase().includes('l')
      );
    } else if (actor === 'brad pitt') {
      return allMovies.filter((movie) =>
        movie.title.originalTitleText.text.toLowerCase().includes('b')
      );
    } else if (actor === 'robert de nitro') {
      return allMovies.filter((movie) =>
        movie.title.originalTitleText.text.toLowerCase().includes('r')
      );
    } else {
      return allMovies;
    }
  };

  const moviesMemo = useMemo(() => movies(), [genre, actor]);

  // let filteredMovies = useMemo(() => {
  //   if (value !== null) {
  //     return moviesMemo.filter((movie) =>
  //       movie.title.originalTitleText.text.toLowerCase().includes(value)
  //     ) || moviesMemo;
  //   }
  //   return []
  // }, [value]);

  useEffect(() => {
    console.log({value: value})
    if (value != null) {
      const movies = moviesMemo.filter((movie) =>
        movie.title.originalTitleText.text.toLowerCase().includes(value)
      );
      setFilteredMovies(movies);
    }
    else{
      setFilteredMovies(movieData)
    }
  }, [value]);

  // console.log('filter', filteredMovies);
  // console.log('memo', moviesMemo);

  useEffect(() => {
    if (location.state !== value) {
      setValue(location.state || value);
    }
  }, [location.state, value]);

  useEffect(() => {
    setMovieData(moviesMemo);
    // setData(moviesMemo);
    // filteredMovies = [];
    setFilteredMovies([])
    setStart(0);
    setEnd(24);
    setCurrentPage(1);
  }, [genre, actor]);


  return (
    <div id="Movies">
      <h1 className="movies-heading">
        The Best {genre !== 'all' ? genre : actor} Movies
      </h1>
      <div className="movies-container">
        {(filteredMovies.length == 0 ? movieData : filteredMovies)
          .slice(start, end)
          .map((movie, index) => (
            <Movie key={index} movie={movie.title} genre={genre} />
          ))}
      </div>

      <div className="pageNavigation">
        {new Array(
          Math.round(
            (filteredMovies.length == 0 ? movieData : filteredMovies).length /
              24
          )
        )
          .fill(0)
          .map((_, index) => (
            <Link
              key={index}
              to={`/${genre !== 'all' ? genre : actor}/page/${index + 1}`}
            >
              <button
                onClick={() => {
                  setCurrentPage(index + 1);
                  setStart(index * 24);
                  setEnd((index + 1) * 24);
                }}
                key={index}
                style={{
                  borderColor: currentPage === index + 1 ? 'red' : '#fff',
                  color: currentPage === index + 1 ? 'red' : '#fff',
                }}
              >
                {index + 1}
              </button>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Movies;

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.post(
//         'https://imdb188.p.rapidapi.com/api/v1/getPopularMovies',
//         {
//           country: {
//             anyPrimaryCountries: ['US'],
//           },
//           limit: 200,
//           releaseDate: {
//             releaseDateRange: {
//               end: '2029-12-31',
//               start: '2000-01-01',
//             },
//           },
//           userRatings: {
//             aggregateRatingRange: { max: 10, min: 6 },
//             ratingsCountRange: { min: 1000 },
//           },
//           genre: {
//             allGenreIds: [genre],
//           },
//           runtime: {
//             runtimeRangeMinutes: { max: 120, min: 0 },
//           },
//         },
//         {
//           headers: {
//             'content-type': 'application/json',
//             'X-RapidAPI-Key':
//               '26f79d3809mshf55664184a5390cp192cb8jsnce83c3736db1',
//             'X-RapidAPI-Host': 'imdb188.p.rapidapi.com',
//           },
//         }
//       );

//       console.log(response.data.data.list[0]);
//       // Assuming setMovieData is a state updater function
//       // Make sure to define setMovieData using useState
//       console.log(response.data.data.list);

//       // setMovieData(response.data.data.list);

//     } catch (error) {
//       console.error('Error making IMDb API request:', error.message);
//     }
//   };

//   fetchData();
// }, [genre]);
