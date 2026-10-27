import { expect, test } from "bun:test";
import { add } from "./provider-canary";

test("adds two positive integers", () => {
  expect(add(2, 3)).toBe(5);
});

test("adds integers with different signs", () => {
  expect(add(-2, 4)).toBe(2);
});
