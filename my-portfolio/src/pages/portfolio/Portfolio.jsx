import { useRef } from 'react'
import { PROJECTS } from '../../constants'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset : ["start start", "end start"]
    })
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt={item.title} />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>

                        <div className="tech">
                            {item.techStack.map((tech, i) => (
                                <div key={i} className="items">{tech}</div>
                            ))}
                        </div>

                        <div className="links">
                            <a target='blank' href={item.demo}>
                                <img src='/external-link.svg' />
                            </a>
                            <a target='blank' href={item.gitHub}>
                                <img src='/github.svg' />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

const Portfolio = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className="portfolio" id="portfolio" ref={ref}>
            <div className="progress">
                <h1>My Works</h1>
                <motion.div style={{ scaleX: scaleX }} className="progressBar"></motion.div>
            </div>
            {PROJECTS.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio