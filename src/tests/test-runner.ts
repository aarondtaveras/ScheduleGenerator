import * as _ from "lodash";

export class TestRunner {
    static runTests(testFuncs, expectedOutputs):boolean[] {
        /*  takes array of test functions and array of
            expected outputs. Checks if they match.
            returns array of boolean results of each test.*/
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
                console.log("error running test: "+testFunc.name);
                console.log(e);
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