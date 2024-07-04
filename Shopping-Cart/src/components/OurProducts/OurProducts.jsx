import { useState, useEffect } from 'react'
import { Product } from './Product/Product'
import styles from "./our-products.module.css"
import { splitArrayToSubArrays } from "../../utils/splitArrayToSubArrays"

import { Pagination } from 'antd'
export const OurProducts = () => {
  const [electronics, setElectronics] = useState([])
  const [page, setPage] = useState(1)
  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/electronics')
      .then(response => response.json())
      .then(data => {
        const nestedArrays = splitArrayToSubArrays(Object.values(data))
        setElectronics(nestedArrays)
      })
      .catch(error => console.log(error.message));
  }, []);

  let totalElectronicsCount = electronics.reduce(
    (count, currentArr) => count + currentArr.length,
    0
  );
  return (

    <>
      <div className={styles.our__products}>
        {
          electronics[page - 1]?.map(item => (<Product key={item._id} {...item} />))
        }
        <Pagination
          simple={{
            readOnly: true,
          }}
          defaultCurrent={1}
          total={totalElectronicsCount}
          current={page}
          pageSize={9}
          onChange={(page) => setPage(page)}
          style={{
            width: '93%',
            justifyContent: 'center'
          }}
        />

      </div>
    </>
  )
}