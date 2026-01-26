import { useState, useEffect } from 'react';
import { fetchProducts } from '../../services/productService';
import { usePopup } from '../../hooks/usePopup';

import { Popup } from '../Popup/Popup';
import { Product } from './Product/Product';
import { CardSkeleton } from './CardSkeleton/CardSkeleton';

import { Pagination, Button, Result } from 'antd';

import { createMatrix, ensureMinSkeletonDelay } from '../../utils/utils';
import styles from "./our-products.module.css"

export const OurProducts = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [retryCount, setRetryCount] = useState(0);

	const [page, setPage] = useState(1);
	const [popupState, showPopupHandler] = usePopup();

	useEffect(() => {
		loadProducts();
	}, [retryCount])

	const loadProducts = async () => {
		showLoadingSkeleton();
		clearError();
		const startTime = Date.now();

		try {
			const data = await fetchProducts();

			// Create matrix which contains sub array for every page with maximum 9 elements.
			const productsMatrix = createMatrix(Object.values(data));
			setProducts(productsMatrix);
		} catch (error) {
			setError(error)
		} finally {
			await ensureMinSkeletonDelay(startTime, 1000);
			hideLoadingSkeleton();
		}
	};

	const clearError = () => setError(null);
	const showLoadingSkeleton = () => setIsLoading(true);
	const hideLoadingSkeleton = () => setIsLoading(false);
	const triggerRetry = () => setRetryCount(prevState => prevState + 1);

	let totalProductsCount = products.reduce(
		(count, currentArr) => count + currentArr.length,
		0
	);

	const retryButtonHandler = () => {
		triggerRetry();
		showLoadingSkeleton();
	}


	return (
		<>
			<div className={styles.ourProducts}>
				{error && !isLoading ?
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

						{(isLoading) ? <CardSkeleton cards={9} /> : products[page - 1]?.map(item => (<Product key={item._id} {...item} showPopupHandler={showPopupHandler} />))}
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