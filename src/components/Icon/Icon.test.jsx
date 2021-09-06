import React from "react";
import { render } from "@testing-library/react";
import Icon from "./index";

describe("Icon", () => {
	const mockComponent = (props) => render(
		<Icon {...props} />,
	);
	test("it renders an icon", () => {
		const {getByRole} = mockComponent({iconName: "ThumbsUp"});
		expect(getByRole("img")).toBeTruthy();
		expect(getByRole("img").getAttribute("aria-label")).toEqual("icon");
	});
});
