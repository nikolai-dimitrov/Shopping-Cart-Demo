import { useState } from "react";

export const usePopup = () => {
	const [popupState, setPopupState] = useState({
		currentStatus: null,
		triggerNotification: false,
		message: "",
		description: "",
	});

	const showPopupHandler = (props) => {
		setPopupState((popupState) => ({
			...popupState,
			...props,
			triggerNotification: !popupState["triggerNotification"],
		}));
	};
	return [popupState, showPopupHandler];
};
