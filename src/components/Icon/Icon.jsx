import React from "react";
import * as feather from "react-feather";

// interface IconProps {
// 	iconName: string,
// 	label: string,
// 	className: string,
// }

const Icon = ({ iconName, label = "icon", className, ...rest }) => {
	const FeatherIcon = feather[iconName];
	const classes = `c-icon ${className}`;

	return (
		<FeatherIcon aria-label={label} className={classes}  role="img" {...rest} />
	);
};

export default Icon;
