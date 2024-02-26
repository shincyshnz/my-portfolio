import './hero.scss'
import { motion } from 'framer-motion'

const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      }
    }
  }

  return (
    <div className="hero">
      <div className="wrapper">

        {/* Text container */}
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Shincy KM</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>See the latest works</motion.button>
            <motion.button variants={textVariants}>Contact me</motion.button>
          </motion.div>
          <motion.img variants={textVariants} src="/scroll.png" alt="" />
        </motion.div>
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