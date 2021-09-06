import React from "react";
import Icon from "../Icon";

// interface ButtonProps {
// 	className?: string,
// 	color: "primary" | "secondary" | "tertiary",
// 	disabled: boolean,
// 	iconName?: string,
// 	label?: string,
// 	size: "sm" | "md" | "lrg" | "full",
// 	variant: "contained" | "link",
// }

const Button = ({
	className,
	color = "primary",
	disabled = false,
	iconName,
	label,
	size = "md",
	variant = "contained",
	...props
}) => {
	const classes = `c-button c-button--${color} ${className} ${iconName && "c-button--icon"} ${size && `c-button--${size}`} ${variant === "link" && "c-button--link"}`; // TODO: classname these properly

	return (
		<button
			className={classes}
			disabled={disabled}
			{...props}
		>
			{iconName && (
				<Icon className={"c-button__icon"} iconName={iconName} />
			)}
			{label && (
				<span className={"c-button__label"}>{label}</span>
			)}
		</button>
	);
};

export default Button;
