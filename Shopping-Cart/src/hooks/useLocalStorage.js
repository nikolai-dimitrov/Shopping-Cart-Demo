import { useState } from "react";
export const useLocalStorage = (key, initialState) => {
	const [persistedState, setPersistedState] = useState(() => {
		let currentState = localStorage.getItem(key);
		if (currentState) {
			return JSON.parse(currentState);
		} else {
			return initialState;
		}
	});

	const setStateLocalStorage = (currentProduct, operationString) => { 
		if (operationString == "add") {
			setPersistedState((persistedState) => [
				...persistedState,
				currentProduct,
			]);
		} else if (operationString == "remove") {
			setPersistedState((persistedState) =>
				persistedState.filter((item) => item._id != currentProduct._id)
			);
		}
	};

	return [persistedState, setStateLocalStorage];
};
