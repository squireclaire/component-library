import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

const Template = (args) => <Button {...args} />;
const GeneralProps = {
	className: null,
	color: "primary",
	disabled: false,
	iconName: null,
	label: "Click me!",
	size: "md",
	variant: "contained",
};

export default {
	title: "Components/Button",
	component: Button,
	argTypes: {
		className: { control: "text" },
		color: { control: "color" },
		disabled: { control: "boolean" },
		iconName: { control: "text" },
		label: { control: "text" },
		onClick: { action: "onClick" },
		size: { control: "text" },
		variant: { control: "text" },
	},
	on: {
		onClick: action("onClick"),
	},
};

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Tertiary = Template.bind({});
export const Link = Template.bind({});
export const Disabled = Template.bind({});
export const FullWidth = Template.bind({});
export const IconButton = Template.bind({});

Primary.args = {
	...GeneralProps,
};
Secondary.args = {
	...GeneralProps,
	color: "secondary",
};
Tertiary.args = {
	...GeneralProps,
	color: "tertiary",
};
Link.args = {
	...GeneralProps,
	variant: "link",
};
Disabled.args = {
	...GeneralProps,
	disabled: true,
};
FullWidth.args = {
	...GeneralProps,
	color: "tertiary",
};
IconButton.args = {
	...GeneralProps,
	iconName: "ThumbsUp",
};

