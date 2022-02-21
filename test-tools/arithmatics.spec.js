
const arithmatic = require("./arithmatics");
const chai = require("chai");
const expect = chai.expect

// Hooks in Chai Library.

// Describe a test suite to contain multiple test cases.
describe("Arithmatics Test", ()=>{

    // it - specifies a test case.
    it("should add 2 values", ()=>{
        // (AAA) Pattern to write test case.
        
        // Arrange - Arrange inputs, dependencies.
        const num1=10;
        const num2=20;
        var actualResult;
        const expectedResult=30;

        // Act - Call the code to test.
        actualResult = arithmatic.add(num1, num2);

        // Assert
        expect(expectedResult).to.be.equal(actualResult);

    });

     // it - specifies a test case.
     it("should multiply 2 values", ()=>{
        // (AAA) Pattern to write test case.
        
        // Arrange - Arrange inputs, dependencies.
        const num1=10;
        const num2=20;
        var actualResult;
        const expectedResult=200;

        // Act - Call the code to test.
        actualResult = arithmatic.mul(num1, num2);

        // Assert
        expect(expectedResult).to.be.equal(actualResult);

    });

     // it - specifies a test case.
     it("should div 2 values", ()=>{
        // (AAA) Pattern to write test case.
        
        // Arrange - Arrange inputs, dependencies.
        const num1=20;
        const num2=10;
        var actualResult;
        const expectedResult=2;

        // Act - Call the code to test.
        actualResult = arithmatic.div(num1, num2);

        // Assert
        expect(expectedResult).to.be.equal(actualResult);

    });

     // it - specifies a test case.
     it("should substract 2 values", ()=>{
        // (AAA) Pattern to write test case.
        
        // Arrange - Arrange inputs, dependencies.
        const num1=10;
        const num2=20;
        var actualResult;
        const expectedResult=-10;

        // Act - Call the code to test.
        actualResult = arithmatic.sub(num1, num2);

        // Assert
        expect(expectedResult).to.be.equal(actualResult);

    });
})
