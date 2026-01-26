import { useState } from "react";
export const useLocalStorage = (key, initialValue) => {
	const [persistedState, setPersistedState] = useState(() => {
		let currentState = localStorage.getItem(key);
		if (currentState) {
			return JSON.parse(currentState);
		} else {
			return initialValue;
		}
	});

	const setStoredValue = (value) => {
		setPersistedState(value);
		localStorage.setItem(key, JSON.stringify(value));
	};

	const clearStoredValue = () => {
		setPersistedState(initialValue)
		localStorage.removeItem(key)
	}

	return [persistedState, setStoredValue, clearStoredValue];
};
