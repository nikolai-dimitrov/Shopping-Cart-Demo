import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import styles from './card-skeleton.module.css'
export const CardSkeleton = ({ cards }) => {
    return (
        Array(cards).fill(0).map((_, index) =>
            <article className={styles.card} key={index}>
                <div className={styles.cardSkeleton}>
                    <div className={styles.imgWrapper}>
                        <Skeleton className={styles.img} baseColor={'#ebece7'} />
                    </div>
                    <Skeleton className={styles.title} />

                    <Skeleton className={styles.price} />
                    <div className={styles.btnWrapper}>
                        <Skeleton width={'40px'} />
                        <Skeleton width={'40px'} />
                    </div>

                </div>

            </article>
        )

    )
} 