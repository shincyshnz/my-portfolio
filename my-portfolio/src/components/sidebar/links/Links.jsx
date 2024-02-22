import { motion } from 'framer-motion'
import { SIDEBAR_LINKS } from "../../../constants"

const Links = () => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  }

  return (
    <div 
    className="links"
    >
      {SIDEBAR_LINKS.map((item, index) => (
        <motion.a
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href={`${item.link}`}
          key={index}>
          {item.text}
        </motion.a>
      ))}
    </div>
  )
}

export default Links