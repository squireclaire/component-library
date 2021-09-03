import React from "react";
import { render } from "@testing-library/react";
import ConditionalRender from "./index";

describe("ConditionalRender", () => {
	const mockComponent = (props) => render(
		<ConditionalRender {...props}>
			<span>Hello World</span>
		</ConditionalRender>,
	);
	test("it renders child content", () => {
		const {container} = mockComponent({show: true});
		expect(container).toHaveTextContent("Hello World");
	});
	test("it doesn't render child content", () => {
		const {container} = mockComponent({show: false});
		expect(container).toHaveTextContent("");
	});
});
