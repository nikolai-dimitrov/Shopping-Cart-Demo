import { Product } from './Product/Product'
import styles from "./our-products.module.css"

export const OurProducts = () => {
  return (
    <>
      {/* <div id="our-products"> */}
      <div className={styles.our__products}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />

      </div>
    </>
  )
}