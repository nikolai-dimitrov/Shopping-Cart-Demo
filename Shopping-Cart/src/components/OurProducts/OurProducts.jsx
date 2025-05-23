import { useState, useEffect } from 'react';
import { usePopup } from '../../hooks/usePopup';

import { Popup } from '../Popup/Popup';
import { Product } from './Product/Product';
import { CardSkeleton } from './CardSkeleton/CardSkeleton';

import { Pagination } from 'antd';

import { splitArrayToSubArrays } from "../../utils/splitArrayToSubArrays";
import styles from "./our-products.module.css"

export const OurProducts = () => {
	const [electronics, setElectronics] = useState([]);
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(true);
	const [popupState, showPopupHandler] = usePopup();


	useEffect(() => {
		// TODO: Too much unnecessary fetches. Fetch products only on initial app load, because products are hardcoded data and it won't change and also it will be always fresh.
		fetch(`${import.meta.env.VITE_API_URL}/jsonstore/electronics`)
			.then(response => response.json())
			.then(data => {
				// Create matrix with arrays with max 9 elements for every page.
				// Products for every page is sub array.
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
			<div className={styles.ourProducts}>
				<Popup {...popupState} />

				{isLoading ? <CardSkeleton cards={9} /> : electronics[page - 1]?.map(item => (<Product key={item._id} {...item} showPopupHandler={showPopupHandler} />))}
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