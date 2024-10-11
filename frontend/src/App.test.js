import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import App from './App';
test('Renders the App component', () => {
    render(_jsx(App, {}));
    const h2Elem = screen.getByText(/template/i);
    expect(h2Elem).toBeInTheDocument();
});
