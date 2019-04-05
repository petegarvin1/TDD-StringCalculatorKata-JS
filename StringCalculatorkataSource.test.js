const Source = require("./StringCalculatorKataSource.js");

test("should return zero when given empty string", () => {
  expect(Source.StringCalculator("")).toBe(0);
});

test("should return correct number when given a single value string", () => {
  expect(Source.StringCalculator("1")).toBe(1);
  expect(Source.StringCalculator("2")).toBe(2);
  expect(Source.StringCalculator("99")).toBe(99);
});

test("should return correct number when given two value string", () => {
  expect(Source.StringCalculator("1,2")).toBe(3);
  expect(Source.StringCalculator("3,2")).toBe(5);
  expect(Source.StringCalculator("99,2")).toBe(101);
});

test("should return correct number when given three value string", () => {
  expect(Source.StringCalculator("2,3,4")).toBe(9);
  expect(Source.StringCalculator("10,15,4")).toBe(29);
  expect(Source.StringCalculator("10,10,10")).toBe(30);
});

test("should return ten when given '1,2,3,4'", () => {
  expect(Source.StringCalculator("1,2,3,4")).toBe(10);
});

test("should return eighteen when given '3,4,5,6'", () => {
  expect(Source.StringCalculator("3,4,5,6")).toBe(18);
});
