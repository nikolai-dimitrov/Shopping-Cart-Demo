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

	const setStateLocalStorage = (value) => {
		setPersistedState(value);
		localStorage.setItem(key, JSON.stringify(value));
	};

	return [persistedState, setStateLocalStorage];
};
