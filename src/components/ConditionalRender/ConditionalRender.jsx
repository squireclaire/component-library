// import React from "react";

// interface ConditionalRenderProps {
// 	show: boolean,
// 	children: React.ReactNode,
// }

const ConditionalRender = ({
	show = false,
	children,
}) => {
	if (show) {
		return children;
	}
	return null;
};

export default ConditionalRender;
