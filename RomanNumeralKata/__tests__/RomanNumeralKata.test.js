const RomanNumeral = require("../RomanNumeralKata.js");
require("jest-each");

describe("RomanNumeralKata", () => {
  test.each`
    input                                  | expectedResult
    ${1} | ${"I"}

  `(
    "should return numeral value of $expectedResult given $input",
    ({ input, expectedResult }) => {
      expect(RomanNumeral.Converter(input)).toBe(expectedResult);
    }
  );
});
