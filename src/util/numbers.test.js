import { expect, it } from "vitest";

import { transformToNumber } from "./numbers";

it("should yield a number if a string is passed", () => {
  const input = "1";
  const res = transformToNumber(input);

  expect(res).toBeTypeOf("number");
})

it("should yield a number if a string is passed", () => {
  const input = "1";
  const res = transformToNumber(input);

  expect(res).toBe(+input);
})

it("should yield NaN for non-transformable values", () => {
  const input = "invalid"
  const input2 = {}
  const res = transformToNumber(input);
  const res2 = transformToNumber(input2);

  expect(res).toBeNaN();
  expect(res2).toBeNaN();
})

