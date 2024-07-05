import styles from './home.module.css'
import codingImg from '../../assets/coding-reactjs-image.png'
import shoppingImg from '../../assets/shoping-card-img.webp'

import { motion } from "framer-motion"
export const Home = () => {
    return (
        <>
            <div className={styles.home}>
                <div className={styles.information__container}>
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: 1, delay: 0.25 }}
                    >
                        <h1>Hey, I'm <span>Nikolay Dimitrov</span>.</h1>
                    </motion.p >

                    <h2>I'm <span>Full Stack Web Developer</span></h2>

                    <h3>Project Description</h3>
                    <p className={styles.description}>This is my Shopping Cart Demo Project.The main reason about doing the project is to practice AntDesign and some libraries responsibe for better UI that i have never used.The main logic is very simple because it isn't the focus of the project. </p>
                    <h3>Project Features</h3>
                    <ul className={styles.features}>
                        <li>- Add items into cart.</li>
                        <li>- Remove items from cart.</li>
                        <li>- Filling delivery information and than you can make an order. </li>
                    </ul>
                    <p>By clicking the button below you are going to visit my GitHub.</p>
                    <a href="#">GitHub</a>
                </div>
                <div className={styles.framerMotion__container}>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 400 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: 0.5, delay: 1 }}
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