import { useRef } from 'react'
import { PROJECTS } from '../../constants'
import './portfolio.scss'
import { motion, useScroll, useSpring } from 'framer-motion'

const Single = ({ item }) => {
    return (
        <section>{item.title}</section>
    );
}

const Portfolio = () => {
    const ref = useRef();
const {scrollYProgress } = useScroll({
    target : ref,
    offset: ["end end", "start start"],
})
 
const scaleX = useSpring()

    return (
        <div className="portfolio">
            <div className="progress">
                <h1>My Works</h1>
                <div className="progressBar"></div>
            </div>
            {PROJECTS.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio