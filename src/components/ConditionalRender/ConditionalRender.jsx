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
