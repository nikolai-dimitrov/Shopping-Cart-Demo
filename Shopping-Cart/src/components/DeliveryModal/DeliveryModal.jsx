import { useEffect } from 'react'
import { DeliveryForm } from '../DeliveryForm/DeliveryForm'
import styles from "./delivery-modal.module.css"
export const DeliveryModal = ({ showModal, closeModalHandler }) => {
    return (
        <>
            <section className={showModal ? `${styles.delivery} ${styles.showDeliveryModal} ` : `${styles.delivery}`}>
                <h1>Finish purchase</h1>
                <DeliveryForm closeModalHandler={closeModalHandler} />
            </section>
        </>
    )
}