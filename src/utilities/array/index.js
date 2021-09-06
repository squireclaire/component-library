const arrayFromObject = obj => Object.keys(obj)
	.filter(key => obj[key] === true);

const arrayFromString = obj => obj.split(" ");

export {
	arrayFromObject,
	arrayFromString,
};

