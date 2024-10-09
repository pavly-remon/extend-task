import {fireEvent, render, screen} from '@testing-library/react';
import Input from "./Input";

test('Renders Input component', () => {
    render(<Input placeholder="Enter Your Name"/>);
    const inputElem = screen.getByPlaceholderText(/enter your name/i);
    expect(inputElem).toBeInTheDocument();
});

test('Insert Value to Input Field', () => {
    render(<Input placeholder="Enter Your Name"/>);
    const inputElem = screen.getByPlaceholderText(/enter your name/i);
    fireEvent.change(inputElem, {target: {value: "Hello"}});
    expect(inputElem).toHaveValue('Hello');
});
