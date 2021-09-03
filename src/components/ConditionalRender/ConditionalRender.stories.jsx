import React from "react";
import ConditionalRender from "./index";

export default {
	title: "ConditionalRender",
	component: ConditionalRender,
	argTypes: {
		show: { control: "boolean" },
	},
};

const Template = (args) => 
	<>
		Conditional child : - 
		<ConditionalRender {...args}>
			<span>Hello World</span>
		</ConditionalRender>
	</>;

export const Default = Template.bind({});

Default.args = {
	show: false
};
