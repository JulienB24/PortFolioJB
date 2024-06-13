import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Back to Top button", () => {
  render(<App />);
  const buttonElement = screen.getByText(/Top/i);
  expect(buttonElement).toBeInTheDocument();
});
