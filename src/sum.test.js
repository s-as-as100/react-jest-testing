import sum from "./sum";

test("Testing for sum function", () => {
  let a = 20;
  let b = 30;
  let output = 50;
  expect(sum(a, b)).toBe(output);
});

test("Testing for sum function2", () => {
    let a = 200;
    let b = 300;
    let output = 500;
    expect(sum(a, b)).toBe(output);
  });
