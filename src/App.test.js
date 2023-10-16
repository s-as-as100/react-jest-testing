import { render, screen } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const text = screen.getByText("React testing example");
//   expect(text).toBeInTheDocument();
// });

test("To check case sensitive", () => {
  render(<App />);
  const text = screen.getByText(/React testing example/i);
  const title = screen.getByTitle(/Ai generator image/i);
  // if we apply / before and after its not check case sensitivity
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
