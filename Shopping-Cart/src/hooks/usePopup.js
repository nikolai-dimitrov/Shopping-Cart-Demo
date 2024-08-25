import { useState } from "react";

export const usePopup = () => {
	const [popupState, setPopupState] = useState({
		status: null,
		open: false,
		timesOpened: 0,
		message: "",
		description: "",
	});

	const showPopupHandler = (status, open, message, description) => {
		setPopupState((popupState) => ({
			...popupState,
			status,
			open,
			timesOpened: (popupState["timesOpened"] += 1),
			message,
			description,
		}));
	};

	return [popupState, showPopupHandler];
};
