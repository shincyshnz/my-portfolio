import './education.scss'
import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'


const Education = () => {
  const ref = useRef(null);

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
      y: -500,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      }
    }
  }

  return (
    <div className="timelineContainer">

      <motion.div
        variants={lineAnimation}
        initial="initial"
        animate="animate"
        className="timeline"
        ref={ref}
      >
        <div className="container left">
          <motion.div
            variants={contentAnimation}
            className="content"
            initial="initial"
            animate="animate"
          >
            <motion.h2
              variants={contentAnimation}
            >M.tech in Computer Science & Engg
            </motion.h2>
            <motion.h5
              variants={contentAnimation}
            >2018 - 2020
            </motion.h5>
            <motion.p
              variants={contentAnimation}
            >APJ Abdul Kalam Technological University
            </motion.p>

            {/* <!-- SVG for left container --> */}
            <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1" className="bg" />
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
        <div className="container right">
          <motion.div
            variants={contentAnimation}
            className="content"
            initial="initial"
            animate="animate">
            <motion.h2
              variants={contentAnimation}
            >B.tech in Computer Science & Engg
            </motion.h2>
            <motion.h5
              variants={contentAnimation}
            >2018 - 2020
            </motion.h5>
            <motion.p
              variants={contentAnimation}
            >Calicut University
            </motion.p>

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
    </div >

  )
}

export default Education
