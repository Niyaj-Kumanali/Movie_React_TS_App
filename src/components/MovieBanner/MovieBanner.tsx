import './MovieBanner.css';
const MovieBanner = ({image}: {image: string}) => {
  return <div id="MovieBanner">
    <img src={image} alt="banner" />
  </div>;
};

export default MovieBanner;
