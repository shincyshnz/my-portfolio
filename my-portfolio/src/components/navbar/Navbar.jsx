import { easeOut, motion } from 'framer-motion'
import "./navbar.scss"
import { SOCIAL_LINKS } from '../../constants'

const Navbar = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 }
    },
  }
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <motion.span
          variants={variants}
          initial="hidden"
          animate="visible"
        >Shincy</motion.span>
        <motion.ul className="social" initial="hidden" animate="visible" variants={variants}>
          {SOCIAL_LINKS.map((item, i) => (
            <motion.li key={i}
              variants={variants}
            >
              <a href={item.url}><img src={item.img} alt={item.alt} /></a>
            </motion.li>

          ))}
        </motion.ul>
      </div>
    </div>
  )
}

export default Navbar