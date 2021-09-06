import React from "react";
import { render, screen } from "@testing-library/react";
import { Input, InputProps } from "../index";

const inputProps: InputProps = {
    type: "text",
    label: "Here you can add extra information",
    name: "extraInfo",
}

describe("<input>", () => {
    test("ther must be a create input from page", async () =>{
        render(<Input {...inputProps}/>)
        const input = await screen.findAllByRole("textbox");
        expect(input).toBeDefined();
    })
});