import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Button from "./index";

describe("Button", () => {
	const mockComponent = (props) => render(
		<Button {...props} />,
	);
	describe("Default Button", () => {
		test("it renders a label", () => {
			const {container} = mockComponent({label: "Click"});
			expect(container).toHaveTextContent("Click");
		});
		test("it handles custom functions onClick", () => {
			const handleClick = jest.fn();
			const {getByRole} = mockComponent({label: "Click", onClick: handleClick()});
			expect(getByRole("button")).not.toBeDisabled();
			fireEvent.click(getByRole("button"));
			expect(handleClick).toHaveBeenCalledTimes(1);
		});
	});
	describe("Disabled Button", () => {
		test("it disables the button", () => {
			const {getByRole} = mockComponent({disabled: true});
			expect(getByRole("button")).toBeDisabled();
		});
	});
	describe("Icon Button", () => {
		test("it can display icon only", () => {
			const {getByRole} = mockComponent({iconName: "ThumbsUp"});
			expect(getByRole("img")).toBeTruthy();
			expect(getByRole("img").getAttribute("aria-label")).toEqual("icon");
		});
		test("it can display icon and label", () => {
			const {getByRole, getByText} = mockComponent({iconName: "ThumbsUp", label: "Click!"});
			expect(getByRole("img")).toBeTruthy();
			expect(getByRole("img").getAttribute("aria-label")).toEqual("icon");
			expect(getByText("Click!")).toBeTruthy();
		});
	});
	// describe("Link Button", () => {
	// });
});
