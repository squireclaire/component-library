import React from "react";
import Icon from "./Icon";

const Template = (args) => <Icon {...args} />;
const GeneralProps = {
	className: null,
	iconName: null,
	label: "icon",
};

export default {
	title: "Components/Icon",
	component: Icon,
	argTypes: {
		className: { control: "text" },
		iconName: { control: "text" },
		label: { control: "text" },
	}
};

export const Default = Template.bind({});

Default.args = {
	...GeneralProps,
	className: "foo-bar",
	color: "red",
	iconName: "ThumbsUp",
	size: "16"
};
