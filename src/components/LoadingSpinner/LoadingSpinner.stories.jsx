import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const Template = (args) => <LoadingSpinner {...args} />;
const GeneralProps = {
	isLoading: false,
};

export default {
	title: "Components/LoadingSpinner",
	component: LoadingSpinner,
	argTypes: {
		isLoading: { control: "boolean" },
	},
};

export const Default = Template.bind({});

Default.args = {
	...GeneralProps,
};
