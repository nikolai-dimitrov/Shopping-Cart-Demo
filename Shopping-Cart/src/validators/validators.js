export function minLenValidator(message) {
	return function validator(_, value) {
		return new Promise((resolve, reject) => {
			if (value && value.length > 2) {
				resolve();
			} else {
				reject(message);
			}
		});
	};
}

export function maxLenValidator(message) {
	return function validator(_, value) {
		return new Promise((resolve, reject) => {
			if (value && value.length < 10) {
				resolve();
			} else {
				reject(message);
			}
		});
	};
}

export function nameValidator(message) {
	return function validator(_, value) {
		const pattern = /^[a-z ,.'-]+$/i;
		return new Promise((resolve, reject) => {
			if (pattern.test(value)) {
				resolve();
			} else {
				reject(message);
			}
		});
	};
}

export function whiteSpaceValidator(message) {
	return function validator(_, value) {
		return new Promise((resolve, reject) => {
			if (value?.trim() != "") {
				resolve();
			} else {
				reject(message);
			}
		});
	};
}

export const validators = {
	minLenValidator,
	maxLenValidator,
	nameValidator,
	whiteSpaceValidator,
};
