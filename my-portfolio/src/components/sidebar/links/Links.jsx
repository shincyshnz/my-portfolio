import { motion, useAnimate } from 'framer-motion'
import { SIDEBAR_LINKS } from "../../../constants"
import { useEffect, useState } from 'react'

const Links = ({setOpen}) => {
  const [selected, setSelected] = useState('');

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

  const handleClick = (e) => {
    setSelected(prev => e.target.classList.value);
    setOpen(false);
  }

  return (
    <motion.div
      variants={variants}
      className="links"
    >
      {SIDEBAR_LINKS.map((item, index) => (
        <motion.a
          onClick={handleClick}
          className={`list--${index}`}
          animate={{ color: `${selected === `list--${index}` ? "#444e5e" : "#000000"}`, }}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href={`${item.link} `}
          key={index}>
          {item.text}
        </motion.a>
      ))}
    </motion.div>
  )
}

export default Links