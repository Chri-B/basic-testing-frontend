// create a file called with the same name of the majort file we want to test, just add .test or .spec so vitest know it is a test file

// import { test } from "vitest"; // it's ok to use "test", but preferred using "it"
import { expect, it } from "vitest";
import { add } from "./math";

// 1.
// Arrange: define testing env and values
// Act: run code / functions
// Assert: evaluate the produced code / result and compare it to the expected value/result

// 2.
// Testing only one thing per test

// 3.
// Focus on the essence of a test

// 4.
// Keep number of assertions ("expects") LOW


// small sentence that describes what the test should do
it('should summarize all number values in an array', () => {
    // Arrange
    const numbers = [1, 2, 3];

    // Act
    const res = add(numbers);

    // Assert
    const expectedResult = numbers.reduce((prevVal, currVal) => prevVal + currVal, 0)
    expect(res).toBe(expectedResult); // https://vitest.dev/api/expect.html
});

it('should yield NaN if at least one invalid number is provided', () => {
    const inputs = ['invalid', 1];

    const res = add(inputs);

    expect(res).toBeNaN();
})

it('should yield a correct sum if an array of numeric string values is provided', () => {
    const inputs = ['1', '2', '3']

    const res = add(inputs);

    const expectedResult = inputs.reduce((prevVal, currVal) => +prevVal + +currVal, 0)
    expect(res).toBe(expectedResult);
})

it('should yield 0 if an empty array is provided', () => {
    const nums = [];

    const res = add(nums);

    expect(res).toBe(0)
})

it('should throw an error if no input is provided', () => {
    const resultFn = () => {
        add()
    }
    // need to wrap in a function so we vitest don't directly execute add() and checks if resultFn throws an error

    expect(resultFn).toThrowError(/is not iterable/);
})

it("should throw an error if provided with multiple arguments instead of an array", () => {
    const num1 = 1;
    const num2 = 2;

    const resultFn = () => {
        add(num1, num2);
    }

    expect(resultFn).toThrow(/is not iterable/);
})