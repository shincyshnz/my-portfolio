import { motion } from 'framer-motion'
import { SIDEBAR_LINKS } from "../../../constants"

const Links = () => {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      }
    }
  }

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    }
  }

return (
  <motion.div
    variants={variants}
    className="links"
  >
    {SIDEBAR_LINKS.map((item, index) => (
      <motion.a
        variants={itemVariants}
        whileHover={{scale :1.1}}
        whileTap={{scale :0.95}}
        href={`${item.link}`}
        key={index}>
        {item.text}
      </motion.a>
    ))}
  </motion.div>
)
}

export default Links