import { Link, NavLink } from 'react-router-dom';
import './HeroBottom.css';
const HeroBottom = () => {
  return (
    <div id="HeroBottom">
      <div className="heroBottom-content">
        <div className="heroBottom-top-part">
          <div className="top-part-box">
            <h1>760</h1>
            <h6>MOVIES</h6>
          </div>
          <div className="top-part-box">
            <h1>20</h1>
            <h6>GENRES</h6>
          </div>
          <div className="top-part-box">
            <h1>10,000+</h1>
            <h6>ACTORS</h6>
          </div>
        </div>
        <div className="heroBottom-bottom-part">
          <h1>The Smart Way To Pick A Movie.</h1>
          <p>
            Watching movies is fun, but figuring out what movie to watch next is
            a nerve-racking experience. Endlessly scrolling through <NavLink to={'https://www.netflix.com'}>Netflix</NavLink>,
            watching trailers on <NavLink to={'https://www.youtube.com'}>YouTube</NavLink>, looking up <NavLink to={'https://www.imdb.com'}>IMDb</NavLink> ratings, wasting half
            an hour and still cannot decide what to watch – does this seem
            familiar to you?
          </p>
          <p>
            Then you have landed on the right page! PickAMovieForMe’s movie
            recommendation engine is the answer to the question “What movie
            should I watch?”! Your film choices are about to be simplified
            greatly.
          </p>
          <p>
            Our quiz-based movie picker finds the perfect movie for your mood,
            occasion and individual preferences in just a few minutes! Whether
            you’re watching a movie by yourself, joining a movie night with
            friends or going on a movie date with your crush – our quiz will
            guide you to an awesome choice!
          </p>
          <h1>What Makes This Movie Recommendation Engine Unique?</h1>
          <ul>
            <li>
              all listed movies are hand-picked and manually tagged by film
              connoisseurs ensuring high quality recommendations
            </li>
            <li>
              even your mood and the occasion are considered in the movie
              suggestion
            </li>
            <li>
              NEW: you can now watch movie trailers directly on our website
            </li>
            <li>
              you get only one recommendation at a time, so there isn’t a hard
              decision again (there is a button to get the next recommendation)
            </li>
            <li>new movies are added consistently</li>
            <li>
              special recommendations for movie dates: these movies are perfect
              for dates & will help you to make a good impression on your crush
            </li>
            <li>
              special categories: movies based on true stories or books, Spy
              Movies, Cop Movies, Heist Movies, Girl Power Movies, Racing
              Movies, Space Movies, Wedding Movies, IMDb Top 250 movies, movies
              set in New York, movies set in Las Vegas, movies that may change
              the way you look at life …
            </li>
          </ul>
          <h1>
            Give it a try! If you like it, please <NavLink to={'https://www.facebook.com'}>share</NavLink> it! If not, we highly
            appreciate any kind of{' '}
            <Link to={'/contact-us'}>
              feedback.
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
