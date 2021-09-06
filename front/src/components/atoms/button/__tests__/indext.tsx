import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button, ButtonTypes, Props } from "../index";

const buttonProps: Props = {
  theme: ButtonTypes.SUCCESS,
  children: "hello",
  onClick: () => {} 
};

const mockedButton = jest.fn();

describe("<Button/>", () => {
  test("Should find a botton in document", async () => {
    render(<Button {...buttonProps} />);
    const button = await screen.findByRole("button");
    expect(button).toBeDefined();
  });
  test("Should contain a botton when the test is run", async () => {
    render(<Button {...buttonProps} />);
    const button = await screen.findByText(buttonProps.children as string, {
      exact: true,
    });
    screen.debug()
    expect(button).toBeDefined();
  });
  test("Should verify when botton is clicked", async () => {
    render(<Button {...buttonProps} />);
    const button = await screen.findByText(buttonProps.children as string, {
      exact: true,
    });
    button.addEventListener("click", mockedButton)
    fireEvent.click(button);
    expect(mockedButton).toHaveBeenCalledTimes(1);
  });
  // test("should exists the type in button", async () =>{
  //   render(<Button {...buttonProps} />);
  //   const button = await screen.getByDisplayValue(buttonProps.theme);
  // });
});