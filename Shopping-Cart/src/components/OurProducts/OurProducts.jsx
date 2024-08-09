import { useState, useEffect, useContext } from 'react'
import { Product } from './Product/Product'
import { ProductContext } from '../../contexts/ProductContext'
import { CardSkeleton } from '../CardSkeleton/CardSkeleton'

import { splitArrayToSubArrays } from "../../utils/splitArrayToSubArrays"
import styles from "./our-products.module.css"

import { Pagination } from 'antd'
export const OurProducts = () => {
  const [electronics, setElectronics] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const { testValue } = useContext(ProductContext)

  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/electronics')
      .then(response => response.json())
      .then(data => {
        const nestedArrays = splitArrayToSubArrays(Object.values(data));
        setElectronics(nestedArrays);
        setIsLoading(false);

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
        {isLoading ? <CardSkeleton cards={9} /> : electronics[page - 1]?.map(item => (<Product key={item._id} {...item} />))}
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