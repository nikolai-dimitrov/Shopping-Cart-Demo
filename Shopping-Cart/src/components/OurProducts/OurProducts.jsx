import { useState, useEffect } from 'react';

import { usePopup } from '../../hooks/usePopup';

import { Popup } from '../Popup/Popup';
import { Product } from './Product/Product';
import { CardSkeleton } from './CardSkeleton/CardSkeleton';

import { Pagination, Button, Result } from 'antd';

import { createMatrix } from '../../utils/createMatrix';

import styles from "./our-products.module.css"

export const OurProducts = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [retry, setRetry] = useState(0);
	const [isRetrying, setIsRetrying] = useState(false);

	const [page, setPage] = useState(1);
	const [popupState, showPopupHandler] = usePopup();

	useEffect(() => {
		if (!isRetrying) {
			setIsLoading(true);
		}

		setError(null);

		fetch(`${import.meta.env.VITE_API_URL}/jsonstore/electronics`)
			.then(response => response.json())
			.then(data => {
				// Create matrix which contains sub array for every page with maximum 9 elements.
				const productsMatrix = createMatrix(Object.values(data));
				setProducts(productsMatrix);
				setIsLoading(false);
			})
			.catch(error => setError(error))
			.finally(setIsRetrying(false))
	}, [retry])

	let totalProductsCount = products.reduce(
		(count, currentArr) => count + currentArr.length,
		0
	);

	const retryButtonHandler = () => {
		setIsRetrying(true);
		setRetry((prev) => prev + 1);
		setError(null);
	}

	return (
		<>
			<div className={styles.ourProducts}>
				{error ?
					<div>
						<Result
							status="500"
							title="500"
							subTitle={error.message}
							extra={<Button type="primary" onClick={retryButtonHandler}>Retry</Button>}
						/>
					</div>
					:
					<>
						<Popup {...popupState} />

						{(isLoading && !isRetrying) ? <CardSkeleton cards={9} /> : products[page - 1]?.map(item => (<Product key={item._id} {...item} showPopupHandler={showPopupHandler} />))}
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