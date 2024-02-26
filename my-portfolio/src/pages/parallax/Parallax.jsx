import { motion } from 'framer-motion'
import './parallax.scss'

const Parallax = ({ type }) => {
  return (
    <div className="parallax" style={{
      background: type === "services"
        ? "linear-gradient(180deg, #111132, #0c0c1d)"
        : "linear-gradient(180deg, #111132, #505064)"
    }}>
      <motion.h1>
        {type === "services" ? "What we do?" : "What we did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets"></motion.div>
      <motion.div className="stars"></motion.div>
    </div>
  )
}

export default Parallax