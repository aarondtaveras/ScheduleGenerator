import {ScheduleEvent} from '../datamodels/schedule-event';
import {generateDictionary, generateSchedules, hasConflict} from '../schedule-generator';
import { TestRunner } from './test-runner';
import { testScheduleByEventGroupNames, testGenerateSchedulesExpected,
         genTestSchedule} from './test-data';


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
    let schedule:ScheduleEvent[] = genTestSchedule();
    let testDic = generateDictionary(schedule);
    return generateSchedules(testDic);
}

function testHasConflict(){
    let schedule:ScheduleEvent[] = genTestSchedule();
    let testOutput:boolean[] = [];
    testOutput.push(hasConflict(schedule[0], schedule[2]));
    testOutput.push(hasConflict(schedule[2], schedule[0]));
    testOutput.push(hasConflict(schedule[1], schedule[7]));
    testOutput.push(hasConflict(schedule[7], schedule[1]));
    return testOutput;
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
    expectedOutputs.push(testGenerateSchedulesExpected);

    //testHasConflict()
    testFuncs.push(testHasConflict);
    expectedOutputs.push([true, true, false, false]);
    
    let testOutcomes:boolean[] = TestRunner.runTests(testFuncs, expectedOutputs);
    return testOutcomes;
}
