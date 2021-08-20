import React from "react";
import { render, screen } from "@testing-library/react";
import { Button, ButtonTypes, Props } from "../index";

const buttonProps: Props = {
  type: ButtonTypes.SUCCESS,
  children: "hello",
};

describe("<Button/>", () => {
  test("Should have a botton", async () => {
    render(<Button {...buttonProps} />);
    const button = await screen.findByRole("button");
    expect(button).toBeDefined();
  });
  test("Should have a botton", async () => {
    render(<Button {...buttonProps} />);
    const button = await screen.findByText(buttonProps.children as string, {
      exact: true,
    });
    screen.debug()
    expect(button).toBeDefined();
  });
});
