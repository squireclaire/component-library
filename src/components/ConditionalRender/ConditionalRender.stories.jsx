import React from "react";
import ConditionalRender from "./index";

const Template = (args) => 
	<>
		Conditional child : - 
		<ConditionalRender {...args}>
			<span>Hello World</span>
		</ConditionalRender>
	</>;
const GeneralProps = {
	show: false,
	children: null,
};

export default {
	title: "Components/ConditionalRender",
	component: ConditionalRender,
	argTypes: {
		show: { control: "boolean" },
	},
};

export const Default = Template.bind({});

Default.args = {
	...GeneralProps,
};
