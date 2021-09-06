import {
	arrayFromObject,
	arrayFromString,
} from "../array";

const classNames = (...options) => options.map(option => {
	if (!option || typeof option === "undefined") {
		return "";
	}
	if (typeof(option) === "string") {
		return arrayFromString(option);
	}
	if (typeof(option) === "object") {
		return arrayFromObject(option);
	}
})
	.flat()
	.reduce((acc, item) => acc.includes(item) ? acc : [...acc, item], [])
	.join(" ");

export {
	classNames,
};
