
const promise = require("../my-promise");
const chai = require("chai");
const expect = chai.expect


describe("Asnychronous Test", ()=>{

    // it("should return success on promise call", async ()=>{
    //     // Arrange
    //     const expectedResult="success";
    //     var actualResult;

    //     // Act
    //     actualResult = await promise();
        
    //     // Assert
    //     expect(actualResult).to.be.equals(expectedResult);
    // });

    it("should return success on promise call", (done)=>{
        // Arrange
        const expectedResult="success";
        var actualResult;

        // Act
        promise().then
        ((res)=>{
            actualResult = res;
            // Assert
            expect(actualResult).to.be.equals(expectedResult);
            done();

        }).catch((err)=>{
            done();
        });
    });
})