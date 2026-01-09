import { useState, useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext'

import { usePopup } from '../../hooks/usePopup';

import { Popup } from '../Popup/Popup';
import { Product } from './Product/Product';
import { CardSkeleton } from './CardSkeleton/CardSkeleton';

import { Pagination } from 'antd';

import styles from "./our-products.module.css"

export const OurProducts = () => {
	const { products, isLoading } = useContext(ProductContext)
	const [page, setPage] = useState(1);

	const [popupState, showPopupHandler] = usePopup();

	let totalProductsCount = products.reduce(
		(count, currentArr) => count + currentArr.length,
		0
	);

	return (
		<>
			<div className={styles.ourProducts}>
				<Popup {...popupState} />

				{isLoading ? <CardSkeleton cards={9} /> : products[page - 1]?.map(item => (<Product key={item._id} {...item} showPopupHandler={showPopupHandler} />))}
				<Pagination
					simple={{
						readOnly: true,
					}}
					defaultCurrent={1}
					total={totalProductsCount}
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