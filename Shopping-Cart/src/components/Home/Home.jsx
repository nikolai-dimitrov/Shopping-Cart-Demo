import { Reveal } from './Reveal/Reveal';

import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa";

import codingImg from '../../assets/coding-reactjs-image.png';
import shoppingImg from '../../assets/shoping-card-img.webp';
import styles from './home.module.css';

export const Home = () => {
    return (
        <>
            {/* Framer motion title */}
            <div className={styles.home}>
                <motion.h1 style={{ position: 'relative' }} variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={styles.heading}>
                    <span>Welcome to the E-Store</span>
                </motion.h1>
                {/* Reveal information  */}
                <div className={styles.informationContainer}>
                    <div className={styles.informationHeadingContainer}>
                        <motion.h1 variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                            initial='hidden'
                            animate='visible'
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <span>Project</span>

                        </motion.h1>
                        <ReactTyped strings={["Summary"]} typeSpeed={15} loop={false} showCursor={false} startDelay={600} >
                            <h1>
                            </h1>
                        </ReactTyped>
                    </div>
                    <Reveal>
                        <h2>Sometimes there is a delay of up to 50 seconds in receiving data from the server, because project uses slow free instance.</h2>
                    </Reveal>
                    <div className={styles.descriptionContainer}>
                        <Reveal>
                            <h3>Built With</h3>
                        </Reveal>
                        <ul className={styles.features}>
                            <Reveal>
                                <li>- Ant Design</li>
                            </Reveal>
                            <Reveal>
                                <li>- Framer Motion</li>
                            </Reveal>
                            <Reveal>
                                <li>- React Loading Skeleton</li>
                            </Reveal>
                            <Reveal>
                                <li>- React Router</li>
                            </Reveal>
                            <Reveal>
                                <li>- Context API</li>
                            </Reveal>
                        </ul>
                    </div>
                    <Reveal>
                        <h3>Project Features</h3>

                    </Reveal>
                    <ul className={styles.features}>

                        <Reveal>
                            <li>- Add items into cart.</li>
                        </Reveal>
                        <Reveal>
                            <li>- Remove items from cart.</li>
                        </Reveal>
                        <Reveal>
                            <li>- Filling delivery information and than make an order. </li>
                        </Reveal>
                    </ul>

                    <Reveal>
                        <a className={styles.githubLink} href="https://github.com/nikolai-dimitrov"><span>GitHub</span> <FaGithub /></a>
                    </Reveal>
                </div>
                {/* Framer motion images */}
                <div className={styles.framerMotionContainer}>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 400 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: 0.5, delay: 1.5 }}
                    >
                        <div className={styles.imgLayout}>
                            <div className={styles.imgWrapper}>
                                <img src={codingImg} alt="" className={styles.imgLeft} />
                            </div>
                            <div className={styles.imgWrapper}>
                                <img src={shoppingImg} alt="" className={styles.imgRight} />
                            </div>

                        </div>
                    </motion.div >
                </div>
            </div>
        </>
    )
}