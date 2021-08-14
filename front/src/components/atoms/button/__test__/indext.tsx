import React from "react";
import {render, screen} from '@testing-library/react';
import { Button } from "../index";


describe('<Button/>', () => {

    test('Should have a botton', async () => {
        render(<Button/>);
        const button = await screen.findByRole('button');
        expect(button).toBeDefined();
    })
})

