import {ScheduleEvent} from './datamodels/schedule-event';
import {runTests} from './tests/test-generate-dictionary'

let testEvents:ScheduleEvent[] = [];
let testEvents2:ScheduleEvent[] = [];
let e = new ScheduleEvent(20, 30,false, 'section 310', 'Math course');
let e3 = new ScheduleEvent(40,50,false,'section 250','Math course');
let e4 = new ScheduleEvent(10,20,false,'section 290','English course')
let e2 = new ScheduleEvent(30, 30,false, 'section 310', 'Math course');
testEvents.push(e);
testEvents2.push(e);
testEvents.push(e2);
testEvents.push(e3);
testEvents.push(e4);
testEvents2[0].eventName = "happy";

var dictionary = {};

//console.log(testEvents);
//console.log(testEvents2);

export function generateDictionary(schedule:ScheduleEvent[]){
    for(let i:number=0;i<schedule.length;i++){
        if(!dictionary[schedule[i].eventGroup]){
            dictionary[schedule[i].eventGroup] = [schedule[i]];
        } else {
            dictionary[schedule[i].eventGroup].push(schedule[i]);
        }
    }
    return dictionary;
}

export function generatePossibleSchedules(eventsByGroup:{}){
    let eventGroups:string[] = Object.keys(eventsByGroup);
    let schedules = [];
    eventGroups.forEach(function(eventGroup, index){
        let groupEvents:string[] = eventsByGroup[eventGroup];
        

    });
}

runTests();