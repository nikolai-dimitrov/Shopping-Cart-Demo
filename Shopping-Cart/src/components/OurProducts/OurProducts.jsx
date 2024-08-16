import { useState, useEffect, useContext } from 'react';
import { Product } from './Product/Product';
import { ProductContext } from '../../contexts/ProductContext';
import { CardSkeleton } from '../CardSkeleton/CardSkeleton';

import { splitArrayToSubArrays } from "../../utils/splitArrayToSubArrays";

import { Pagination, notification } from 'antd';

import styles from "./our-products.module.css"

export const OurProducts = () => {
	const [electronics, setElectronics] = useState([]);
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(true);
	const [api, contextHolder] = notification.useNotification();

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

	const showNotification = (productTitle, status) => {
		api[`${status}`]({
			message: status == 'success' ? "Successful purchase!" : "Unsuccessful purchase",
			description: status == 'success' ? `You successfully added to cart ${productTitle}` : `You have already added ${productTitle}!`,
			showProgress: true,
			pauseOnHover: true,
		})

	}

	let totalElectronicsCount = electronics.reduce(
		(count, currentArr) => count + currentArr.length,
		0
	);

	return (

		<>

			<div className={styles.ourProducts}>
				<>
					{contextHolder}
				</>
				{isLoading ? <CardSkeleton cards={9} /> : electronics[page - 1]?.map(item => (<Product key={item._id} {...item} showNotification={showNotification} />))}
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