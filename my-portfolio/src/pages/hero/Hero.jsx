import './hero.scss'
import { motion } from 'framer-motion'

const Hero = () => {

  return (
    <div className="hero">
      <div className="wrapper">

        {/* Text container */}
        <div className="textContainer">
          <h2>Shincy KM</h2>
          <h1>Web Developer</h1>
          <div className="buttons">
            <button>See the latest works</button>
            <button>Contact me</button>
          </div>
          <img src="/scroll.png" alt="" />
        </div>
        {/* Sliding Text container */}
        <div className="slidingTextContainer">
          Web Developer Front End Developer 
        </div>

        {/* Image container */}
        <div className="imageContainer">
          <motion.img width={"120%"} src="/hero2.png" alt="hero" />
        </div>
      </div>
    </div>
  )
}

export default Hero