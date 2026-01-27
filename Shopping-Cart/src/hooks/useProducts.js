import { useState } from "react";
import { fetchProducts } from "../services/productService";
import { createMatrix } from "../utils/utils";
export const useProducts = () => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(null);

	const getProducts = async () => {
		setError(null);
		try {
			const data = await fetchProducts();

			// Create matrix which contains sub array for every page with maximum 9 elements.
			const productsMatrix = createMatrix(Object.values(data));
			setProducts(productsMatrix);
		} catch (error) {
			setError(error);
		}
	};

	return { products, error, getProducts };
};
