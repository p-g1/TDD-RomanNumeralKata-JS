const RomanNumeral = require("../RomanNumeral.js");
require("jest-each");

describe("RomanNumeralKata", () => {
  test.each`
    input | expectedResult
    ${1}  | ${"I"}
    ${2}  | ${"II"}
    ${3}  | ${"III"}
    ${4}  | ${"IV"}
    ${5}  | ${"V"}
    ${6}  | ${"VI"}
    ${7}  | ${"VII"}
    ${8}  | ${"VIII"}
    ${9}  | ${"IX"}
    ${10}  | ${"X"}

  `(
    "should return numeral value of $expectedResult given $input",
    ({ input, expectedResult }) => {
      expect(RomanNumeral.Converter(input)).toBe(expectedResult);
    }
  );
});
