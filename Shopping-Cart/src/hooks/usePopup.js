import { useState } from "react";

export const usePopup = () => {
	const [popupState, setPopupState] = useState({
		currentStatus: null,
		timesOpened: 0,
		message: "",
		description: "",
	});

	const showPopupHandler = (props) => {
		setPopupState((popupState) => ({
			...popupState,
			...props,
			timesOpened: (popupState["timesOpened"] += 1),
		}));
	};
	return [popupState, showPopupHandler];
};
