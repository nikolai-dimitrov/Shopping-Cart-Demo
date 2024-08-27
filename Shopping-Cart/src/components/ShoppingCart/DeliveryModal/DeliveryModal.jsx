import { DeliveryForm } from '../DeliveryForm/DeliveryForm';
import styles from "./delivery-modal.module.css";

export const DeliveryModal = ({
    showDeliveryModal,
    closeModalHandler,
    successOrder
}) => {
    return (
        <>
            <section className={showDeliveryModal ? `${styles.delivery} ${styles.showDeliveryModal} ` : `${styles.delivery}`}>
                <h1>Finish purchase</h1>
                <DeliveryForm closeModalHandler={closeModalHandler} successOrder={successOrder} />
            </section>
        </>
    )
}