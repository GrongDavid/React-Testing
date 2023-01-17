import React from "react";
import { render } from "@testing-library/react";
import Card from './Card'

test('card renders correctly', () => {
    render(<Card/>)
})

test('card matches snapshot', () => {
    const {asFragment} = render(<Card/>)
    expect(asFragment()).toMatchSnapshot();
})

