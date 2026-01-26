export const fetchProducts = async () => {
	try {
		const response = await fetch(
			`${import.meta.env.VITE_API_URL}/jsonstore/electronics`
		);

        if(!response.ok) {
            // Throw general error message
            throw new Error("There was a problem connecting to the server.")
        }

		const data = await response.json();
		return data;
	} catch (error) {
        throw error
	}
};
