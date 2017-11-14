import * as _ from "lodash";

export class TestRunner {
    static runTests(testFuncs, expectedOutputs):boolean[] {
        if (testFuncs.length != expectedOutputs.length) {
            throw "Test functions do not match expected outputs";
        }
        return testFuncs.map(function(testFunc, index){
            let testOutput;
            let expectedOutput = expectedOutputs[index];
            let testPassed:boolean;

            try {
                testOutput = testFunc();
            } catch (e) {
                return false;
            }
            if (expectedOutput == null) {
                return true;
            } else {
                testPassed = JSON.stringify(testOutput) === JSON.stringify(expectedOutput);
                if(!testPassed){
                    console.log("Test Failed for "+ testFunc.name);
                    console.log("test output doesn't match expected output: ")
                    console.log("test output:");
                    console.log(testOutput);
                    console.log("expected output:");
                    console.log(expectedOutput);
                }
                return testPassed;
            }
        });
    }
}