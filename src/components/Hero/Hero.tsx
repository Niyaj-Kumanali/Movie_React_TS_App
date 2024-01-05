import { useState } from 'react'
import './Hero.css'
import MovieRecommend from '../MovieRecommend/MovieRecommend'
const Hero = () => {
  const [isClicked, setIsClicked] = useState(true)
  return (
    <div id="Hero">
        {isClicked ?<div className="hero-content">
            <h1>MOVIE RECOMMENDATION ENGINE</h1>
            <p>You can’t decide between thousands of movies available for streaming?</p>
            <p>Answer 6 questions and let us do the work!</p>
            <button className="hero-btn" onClick={()=> setIsClicked(false)}>Start Now</button>
        </div>: <MovieRecommend />}
    </div>
  )
}

export default Hero