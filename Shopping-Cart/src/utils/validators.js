export function minLenValidator(message) {
	return function validator(_, value) {
		return new Promise((resolve, reject) => {
			if (value && value.length > 2) {
				resolve();
			} else {
				console.log(message);
				reject(message);
			}
		});
	};
}

export function maxLenValidator(_, value) {
	return function validator(_, value) {
		return new Promise((resolve, reject) => {
			if (value && value.length < 10) {
				resolve();
			} else {
				reject("First Name must be lower than 10 characters.");
			}
		});
	};
}
export const validators = {
	minLenValidator,
	maxLenValidator,
};
