import styles from "./delivery-modal.module.css"
export const DeliveryModal = ({ showModal, closeModalHandler }) => {
    return (
        <>
            <section className={showModal ? `${styles.delivery} ${styles.showDeliveryModal} ` : `${styles.delivery}`}>
                <h1>Delivery Information</h1>
                <form action="">
                    <label htmlFor="">This is input</label>
                    <input type="text" />
                </form>
                <button onClick={closeModalHandler}>Button</button>
            </section>
        </>
    )
}