import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const textElement = screen.getByText(/This will be in a test/i);
  expect(textElement).toBeInTheDocument();
});

test("renders learn my link", () => {
  render(<App />);
  const textElement = screen.getByText(/This will be in a test/i);
  expect(textElement).toBeInTheDocument();
});
