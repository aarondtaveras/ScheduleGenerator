import { timeConvertFuncs } from '../real-scheduler-convert';
import { TestRunner } from './test-runner';

function testConvertNumericRealTime() {
    let firstDate:Date = new Date(2010, 10, 8);
    let lastDate:Date = new Date(2010, 10, 8 + 7);
    let tcf = timeConvertFuncs(firstDate, lastDate);
    let numericToReal = tcf[0];
    let realToNumeric = tcf[1];
    
    let realTime:Date = new Date(2010, 10, 9);

    let firstNumericDay:number = realToNumeric(realTime);
    let firstRealDay:Date = numericToReal(firstNumericDay);

    return realTime - firstRealDay;
}

export function runTests(){
    let testFuncs = [];
    let expectedOutputs = [];

    testFuncs.push(testConvertNumericRealTime);
    expectedOutputs.push(0);

    let testOutcomes:boolean[] = TestRunner.runTests(testFuncs, expectedOutputs);
    return testOutcomes;
}