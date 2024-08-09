import { motion } from "framer-motion"

import styles from './reveal.module.css'
export const Reveal = ({ children }) => {
    return (
        <div className={styles.container}>
            <motion.div
                variants={{
                    hidden: {
                        opacity: 0,
                        y: 75,
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                    },
                }}
                initial='hidden'
                animate='visible'
                transition={{ duration: 0.5, delay: 0.75 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial='hidden'
                animate='visible'
                transition={{ duration: 0.8, ease: 'easeIn' }}
                style={{
                    position: 'absolute',
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: 'rgb(0, 107, 161)',
                    zIndex: 20,
                }}
            />
        </div>
    )
}

