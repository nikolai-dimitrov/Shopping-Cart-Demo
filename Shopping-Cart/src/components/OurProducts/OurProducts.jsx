import { useState, useEffect } from 'react';

import { usePopup } from '../../hooks/usePopup';

import { Popup } from '../Popup/Popup';
import { Product } from './Product/Product';
import { CardSkeleton } from './CardSkeleton/CardSkeleton';

import { Pagination } from 'antd';

import { createMatrix } from '../../utils/createMatrix';

import styles from "./our-products.module.css"

export const OurProducts = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null)
	const [page, setPage] = useState(1);
	const [retry, setRetry] = useState(0)

	const [popupState, showPopupHandler] = usePopup();

	useEffect(() => {
		setIsLoading(true);
		setError(null)

		fetch(`${import.meta.env.VITE_API_URL}/jsonstore/electronics`)
			.then(response => response.json())
			.then(data => {
				// Create matrix which contains sub array for every page with maximum 9 elements.
				const productsMatrix = createMatrix(Object.values(data));
				setProducts(productsMatrix);
				setIsLoading(false);
			})
			.catch(error => setError(error))
	}, [retry])

	let totalProductsCount = products.reduce(
		(count, currentArr) => count + currentArr.length,
		0
	);

	const retryButtonHandler = () => {
		setRetry((prev) => prev + 1)
		setError(null)
	}

	return (
		<>
			<div className={styles.ourProducts}>
				{error ?
					<div>
						<p>{error.message}</p>
						<button onClick={retryButtonHandler}>Retry</button>
					</div>
					:
					<>
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
					</>

				}
			</div>
		</>
	)
}