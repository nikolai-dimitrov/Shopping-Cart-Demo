import { Product } from './Product/Product'
import styles from "./our-products.module.css"

import { Pagination } from 'antd'
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
        <Product />
        <Product />
        <Product />
        <Pagination
          simple={{
            readOnly: true,
          }}
          defaultCurrent={1}
          total={20}
          style={{
            width: '93%',
            justifyContent: 'center'
          }}
        />

      </div>
    </>
  )
}