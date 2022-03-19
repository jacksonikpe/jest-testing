const functions = require("./functions");

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

const initDatabase = () => console.log("Database Initialized...");
const closeDatabase = () => console.log("Database Closed...");

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

//less than and greater than
test("should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

//Arrays
test("Admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

//working with async data

//promise
// test("user fetched name should be Leanne Graham", () => {
//   expect.assertions(1);
//   return functions.fetchUser().then((data) => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

//Async Await
test("user fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
