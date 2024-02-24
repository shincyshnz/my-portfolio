import './hero.scss'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="hero">
        <motion.div
          className="imageContainer"
          initial={{ x: 1000 }}
          animate={{ x: 0, delay: 2,}}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <img src="/hero1.png" alt="hero" />
        </motion.div>
    </div>
  )
}

export default Hero