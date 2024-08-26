export const calculateOrderExpenses = (cartProducts, quantity) => {
	let subTotalPrice = 0;
	cartProducts.forEach(
		(el) => (subTotalPrice += el.price * quantity[el._id])
	);
	const salesTax = subTotalPrice * 0.1;
	const shippingTax = 50;
	let grandTotalPrice = subTotalPrice + salesTax + shippingTax;

	const freeShippingPercent = ((grandTotalPrice - shippingTax) / 5000) * 100;
	freeShippingPercent >= 100
		? (grandTotalPrice -= shippingTax)
		: grandTotalPrice;
	return {
		subTotalPrice,
		salesTax,
		grandTotalPrice,
		freeShippingPercent,
	};
};
