import sum from "./sum";

test("Testing for sum function", () => {
  let a = 20;
  let b = 30;
  let output = 50;
  expect(sum(a, b)).toBe(output);
});
