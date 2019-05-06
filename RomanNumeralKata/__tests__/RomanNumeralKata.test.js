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
    ${11}  | ${"XI"}
    ${12}  | ${"XII"}
    ${13}  | ${"XIII"}
    ${14}  | ${"XIV"}
    ${15}  | ${"XV"}
    ${16}  | ${"XVI"}
    ${17}  | ${"XVII"}
    ${18}  | ${"XVIII"}
    ${19}  | ${"XIX"}
    ${20}  | ${"XX"}
    ${40}  | ${"XL"}
    ${50}  | ${"L"}

  `(
    "should return numeral value of $expectedResult given $input",
    ({ input, expectedResult }) => {
      expect(RomanNumeral.Converter(input)).toBe(expectedResult);
    }
  );
});
