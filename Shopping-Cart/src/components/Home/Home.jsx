import { Reveal } from '../Reveal/Reveal';
import styles from './home.module.css';
import codingImg from '../../assets/coding-reactjs-image.png';
import shoppingImg from '../../assets/shoping-card-img.webp';

import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
export const Home = () => {
    return (
        <>
            <div className={styles.home}>
                <motion.h1 style={{ position: 'relative' }} variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 0.5, delay: 0.1 }} className={styles.heading}><span className={styles.first}>Welcome</span> <span className={styles.second}>to</span> <span className={styles.third}>the</span> <span className={styles.fourth}>E-Store</span></motion.h1>
                <div className={styles.information__container}>
                    <div className={styles.information__heading_container}>
                        <motion.h1 variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                            initial='hidden'
                            animate='visible'
                            transition={{ duration: 0.5, delay: 0.2 }}>Hey, I am
                        </motion.h1>
                        <ReactTyped strings={["Nikolay Dimitrov"]} typeSpeed={15} loop={false} showCursor={false} startDelay={600} >
                            <h1>
                            </h1>
                        </ReactTyped>
                    </div>
                    <Reveal>
                        <h2>Full Stack Web Developer</h2>
                    </Reveal>
                    <div className={styles.description__container}>
                        <Reveal>
                            <h3>Project Description</h3>
                        </Reveal>
                        <Reveal>
                            <p className={styles.description}>This is my Shopping Cart Demo Project.The main reason about doing the project is to practice AntDesign and some libraries responsibe for better UI that i have never used.The main logic is very simple because it isn't the focus of the project. </p>
                        </Reveal>
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
                        <p>By clicking the button below you are going to visit my GitHub.</p>
                        <a href="#">GitHub</a>
                    </Reveal>
                </div>
                <div className={styles.framerMotion__container}>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 400 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: 0.5, delay: 1.5 }}
                    >
                        <div className={styles.img__container}>
                            <div className={styles.img__wrapper}>
                                <img src={codingImg} alt="" className={styles.img__left} />
                            </div>
                            <div className={styles.img__wrapper}>
                                <img src={shoppingImg} alt="" className={styles.img__right} />
                            </div>

                        </div>
                    </motion.div >
                </div>
            </div>
        </>
    )
}