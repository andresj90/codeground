import {Test} from '../index'
import { act,fireEvent, render, screen} from '@testing-library/react'

describe('<Test/>', () => {
    it('should render when button click', async () => {
        render(<Test/>);
        const button = await screen.findByRole("button");
        let p =screen.queryByText("i am showing here")
        expect(p).toBeNull();
        screen.debug();
        fireEvent.click(button); 
        p =screen.queryByText("i am showing here")
        expect(p).toBeDefined();
        screen.debug();
    });
});
