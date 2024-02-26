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
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2, repeat: Infinity,
      },
    },
  }

  const imgVariants = {
    initial: {
      x: 500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  }

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-920%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 60,
      },
    },
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
          <motion.h1 variants={textVariants}>Front End Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>See the latest works</motion.button>
            <motion.button variants={textVariants}>Contact me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png" alt="" />
        </motion.div>

        {/* Sliding Text container */}
        <motion.div className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate">
          React Express MongoDb Html Scss Nodejs Redux Tailwind
        </motion.div>

        {/* Image container */}
        <motion.div
          className="imageContainer"
          variants={imgVariants}
          initial="initial"
          animate="animate"
        >
          <motion.img
            variants={imgVariants}
            width={"120%"} src="/hero2.png" alt="hero" />
        </motion.div>

      </div>
    </div >
  )
}

export default Hero