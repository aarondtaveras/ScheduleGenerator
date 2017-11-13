import {ScheduleEvent} from '../datamodels/schedule-event';
import {generateDictionary, generatePossibleSchedules} from '../schedule-generator';
import { TestRunner } from './test-runner';
import { testScheduleByEventGroupNames } from './test-data';


function testGenerateDictionary():object{
    let testSchedule:ScheduleEvent[] = [];
    let g1:string = 'Math course';
    let g2:string = 'English course';
    let g3:string = 'Science course';
    for(let i:number = 0;i<20;i++){
        if(i>=0 && i<5){
            let e = new ScheduleEvent(i,i,false,'section' + i,g1);
            testSchedule.push(e);
        }
        else if(i>=5 && i<=12){
            let e = new ScheduleEvent(i,i,false,'section' + i,g2);
            testSchedule.push(e);
        }
        else{
            let e = new ScheduleEvent(i,i,false,'section' + i,g3);
            testSchedule.push(e);
        }
    }
   return generateDictionary(testSchedule);
}

function testGeneratePossibleSchedules(){
    let testDic = testGenerateDictionary();
    //console.log(testDic);
    console.log('hi');
}

export function runTests(){
    let testFuncs = [];
    let expectedOutputs = [];
    let expectedOutput:{};

    //test generate dictionary
    testFuncs.push(testGenerateDictionary);
    expectedOutput = testScheduleByEventGroupNames;
    expectedOutputs.push(expectedOutput);

    //testGeneratePossibilities
    testFuncs.push(testGeneratePossibleSchedules);
    expectedOutputs.push(null);
    
    TestRunner.runTests(testFuncs, expectedOutputs);
}
