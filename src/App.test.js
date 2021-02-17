/* import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/

import { render } from "@testing-library/react";
import App from "./App";
import React from "react";
import '@testing-library/jest-dom' //apparently if i I don't use this line, will have error that
// toBeInDocument() does not work -> found solution online saying need to install & import jest-dom


test("renders Pokemon Gallery component", () => {
  const { getByText } = render(<App />);
  const element = getByText(/Charmander/);
  expect(element).toBeInTheDocument();
});
