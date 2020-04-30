const debounce = (func) => {
	let timeOutId;
	return (...args) => {
		if (timeOutId) {
			clearInterval(timeOutId);
		}
		timeOutId = setTimeout(() => {
			func.apply(null, args);
		}, 500);
	};
};
