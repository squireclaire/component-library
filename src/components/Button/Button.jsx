import React from "react";

const Button = ({ label, backgroundColor, onClick }) => {
	return (
		<button onClick={onClick} style={backgroundColor && { backgroundColor }}>
			{label}
		</button>
	);
};

export default Button;
