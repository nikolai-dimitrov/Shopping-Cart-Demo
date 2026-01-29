import { useState, useEffect } from 'react';

import { useProducts } from '../../hooks/useProducts';
import { usePopup } from '../../hooks/usePopup';

import { Popup } from '../Popup/Popup';
import { Product } from './Product/Product';
import { CardSkeleton } from './CardSkeleton/CardSkeleton';

import { Pagination, Button, Result } from 'antd';

import { ensureMinSkeletonDelay } from '../../utils/utils';
import styles from "./our-products.module.css"

export const OurProducts = ({ updateProductsAvailability }) => {
	const { products, error, getProducts } = useProducts();
	const [isSkeletonVisible, setIsSkeletonVisible] = useState(false);

	const [page, setPage] = useState(1);
	const [popupState, showPopupHandler] = usePopup();


	useEffect(() => {
		loadProducts();
	}, [])

	useEffect(() => {
		// Convert error to boolean
		const isAvailable = !error;
		updateProductsAvailability(isAvailable);
	}, [error])

	const loadProducts = async () => {
		showLoadingSkeleton();
		const startTime = Date.now();
		// Fetch products and enforce min loading duration together to prevent skeleton flicker for fast network responses.
		// For slow network response waiting fetching products than remove skeleton without additional skeleton delay.
		await Promise.all([
			getProducts(),
			ensureMinSkeletonDelay(startTime, 1000)

		]);

		hideLoadingSkeleton();
	}

	const showLoadingSkeleton = () => setIsSkeletonVisible(true);
	const hideLoadingSkeleton = () => setIsSkeletonVisible(false);

	let totalProductsCount = products.reduce(
		(count, currentArr) => count + currentArr.length,
		0
	);

	return (
		<div className={styles.ourProducts}>
			{error && !isSkeletonVisible ?
				<div>
					<Result
						status="500"
						title="500"
						subTitle={error.message}
						extra={<Button type="primary" onClick={loadProducts}>Retry</Button>}
					/>
				</div>
				:
				<>
					<Popup {...popupState} />
					<>
						{(isSkeletonVisible) ?
							<CardSkeleton cards={9} />
							:
							<>
								{(products.length > 0) ?
									<>
										{products[page - 1]?.map(item => (<Product key={item._id} {...item} showPopupHandler={showPopupHandler} />))}
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
									:
									<div>asd</div>
								}
							</>
						}
					</>
				</>
			}

		</div >

	)
}
