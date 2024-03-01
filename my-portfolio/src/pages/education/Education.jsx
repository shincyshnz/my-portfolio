import './education.scss'
import { motion } from 'framer-motion'


const Education = () => {
  const lineAnimation = {
    initial: { height: 0, opacity: 0 },
    animate: {
      height: "75%",
      opacity: 1,
      transition: {
        duration: 1,
      }
    }
  }

  const contentAnimation = {
    initial: {
      y: -100,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
      }
    }
  }

  const hoverEffect = {
    backgroundColor: "rgb(255, 255, 255)",
    color: "#000000",
  }

  return (
    <div className='education'>
      <div className="imageContainer">
      
      </div>

      <div className="timelineContainer">
        {/* Text Container */}
        <motion.div
          variants={lineAnimation}
          initial="initial"
          // animate="animate"
          whileInView="animate"
          className="timeline"
        >
          <div className="container right">
            <motion.div
              variants={contentAnimation}
              className="content"
              initial="initial"
              whileInView="animate"
              whileHover={hoverEffect}
            >
              <motion.h2
                variants={contentAnimation}
              >M.Tech
              </motion.h2>
              <motion.h5
                variants={contentAnimation}
              >Computer Science & Engineering
              </motion.h5>
              <motion.h5
                variants={contentAnimation}
              >APJ Abdul Kalam Technological University
              </motion.h5>

              {/* <!-- SVG for left container --> */}
              <motion.svg id="progress" width="100" height="100" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  pathLength="1" className="bg"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="30"
                  pathLength="1"
                  className="indicator"
                />
              </motion.svg>

            </motion.div>
          </div>

          <div className="container right">
            <motion.div
              variants={contentAnimation}
              className="content"
              initial="initial"
              whileInView="animate"
              whileHover={hoverEffect}
            >
              <motion.h2
                variants={contentAnimation}
              >B.Tech
              </motion.h2>
              <motion.h5
                variants={contentAnimation}
              > Computer Science & Engineering
              </motion.h5>
              <motion.h5
                variants={contentAnimation}
              >Calicut University
              </motion.h5>

              {/* <!-- SVG for right container --> */}
              <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="30"
                  pathLength="1"
                  className="indicator"
                />
              </svg>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>


  )
}

export default Education
