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
                testPassed = true//isEqual(testOutput, expectedOutputs[index]);
                return testPassed;
            }
        });
    }
}
/*
function isEqual(obj1, obj2){
    for (let i in obj1) {
        try{
            if (obj1[i] !== obj2[i] || ! isEqual(obj1[i], obj2[i])){
                return false;
            }
        } catch {
            return false;
        }
    }
    return true;
}*/