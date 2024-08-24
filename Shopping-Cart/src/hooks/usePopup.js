import { useState } from "react";

export const usePopup = () => {
	const [popupState, setPopupState] = useState({
		status: null,
		open: false,
		timesOpened: 0,
		message: "",
		description: "",
	});
	return [popupState, setPopupState];
};
