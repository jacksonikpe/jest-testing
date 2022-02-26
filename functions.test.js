const functions = require("./functions");

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to not equal 4", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

//check for truthy and falsy values
//toBeNull matches only null
// toBeUndifined matches only undefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statment treats as false

test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("should be falsy", () => {
  expect(functions.checkValue(1)).toBeTruthy();
});

test("User should be Jackson Collins-Ikpe", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Jackson",
    lastName: "Collins-Ikpe",
  });
});
