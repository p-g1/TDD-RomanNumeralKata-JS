const RomanNumeral = require("../RomanNumeral.js");
require("jest-each");

describe("RomanNumeralKata", () => {
  test.each`
    input | expectedResult
    ${1}  | ${"I"}
    ${2}  | ${"II"}
    ${3}  | ${"III"}

  `(
    "should return numeral value of $expectedResult given $input",
    ({ input, expectedResult }) => {
      expect(RomanNumeral.Converter(input)).toBe(expectedResult);
    }
  );
});
