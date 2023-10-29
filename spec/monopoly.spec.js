//first-jasmine-project/spec/helloWorld.spec.js

/* Jasmine Testing for monopoly.js
Install Jasmine. NPM handles getting the most recent version of the Jasmine package 
and puts a copy in the node_modules folder.
$ npm install -g jasmine

Initialize Jasmine. This will generate a support/jasmine.json within spec 
that lets Jasmine know where to look for tests.
$ jasmine init

Run tests repeatly, by running jasmine in the command line each time, 
instead of using a specRunner.html.
$ jasmine

TDD:
Arrange – setup the testing objects and prepare the prerequisites for the test.
Act – perform the actual work of the test.
Assert – verify the result.
*/

// import functions here from monopoly.js
let game = require('../monopoly.js');
let rollDice = require('../monopoly.js');


// test suites
describe("game", () => {
    it("it should", () => {
      expect(typeof game).toBe("function");
    });
});

describe("rollDice", () => {
    it("should return an array of length 2", () => {
      const result = rollDice();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(2);
    });

    it("should return values between 1 and 6 for both dice", () => {
        const result = rollDice();
        expect(result[0]).toBeGreaterThanOrEqual(1);
        expect(result[0]).toBeLessThanOrEqual(6);
        expect(result[1]).toBeGreaterThanOrEqual(1);
        expect(result[1]).toBeLessThanOrEqual(6);
      });

    it("should simulate random rolls", () => {
        // This test checks that the rolls are not consistently the same.
        const result1 = rollDice();
        const result2 = rollDice();
        expect(result1.toString()).not.toEqual(result2.toString());
    });
  
});