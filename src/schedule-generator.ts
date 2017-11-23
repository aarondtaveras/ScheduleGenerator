import {ScheduleEvent} from './datamodels/schedule-event';
import {runTests} from './tests/test-generate-dictionary'
import * as _ from "lodash";

let testEvents:ScheduleEvent[] = [];
let testEvents2:ScheduleEvent[] = [];
let e = new ScheduleEvent(20, 30,false, 'section 310', 'Math course');
let e3 = new ScheduleEvent(40, 50,false,'section 250','Math course');
let e4 = new ScheduleEvent(10, 20,false,'section 290','English course')
let e2 = new ScheduleEvent(30, 30,false, 'section 310', 'Math course');
testEvents.push(e);
testEvents2.push(e);
testEvents.push(e2);
testEvents.push(e3);
testEvents.push(e4);
testEvents2[0].eventName = "happy";

var dictionary = {};

export function generateDictionary(schedule:ScheduleEvent[]){
    let dictionary:{} = {};
    for(let i:number=0;i<schedule.length;i++){
        if(!dictionary[schedule[i].eventGroup]){
            dictionary[schedule[i].eventGroup] = [schedule[i]];
        } else {
            dictionary[schedule[i].eventGroup].push(schedule[i]);
        }
    }
    return dictionary;
}


/* --- Start of Generating All Schedule Combination Functions --- */
/* Entry point for generating schedules */
export function generateSchedules(eventsByGroup:{}, startIndex=0):ScheduleEvent[][]{
    let eventGroups:string[] = Object.keys(eventsByGroup);
    let currentGroup:string = eventGroups[startIndex];
    let currentGroupEvents:ScheduleEvent[] = eventsByGroup[currentGroup];
    let schedules:ScheduleEvent[][];

    if(startIndex === eventGroups.length-1){
        return currentGroupEvents.map(singleGroupGenSched);
    }
    schedules = currentGroupEvents.reduce(function(schedules:ScheduleEvent[][], event:ScheduleEvent){
        return multiGroupGenSched(schedules, event, eventsByGroup, startIndex);
    }, []);
    return schedules;
}

function singleGroupGenSched(event:ScheduleEvent):ScheduleEvent[] {
    /* All possibile schedules if you have
       to pick one event out of a few events */
    return [event];
}

function multiGroupGenSched(schedules:ScheduleEvent[][], event:ScheduleEvent,
                            eventsByGroup:{}, startIndex:number
                           ):ScheduleEvent[][] {
    /* Inductive step of picking all possible schedules */
    let nextSchedules:ScheduleEvent[][] = generateSchedules(eventsByGroup, startIndex+1);
    let schedulesWithCurrentEvent:ScheduleEvent[][] = nextSchedules.map(
        function(schedule:ScheduleEvent[]):any{
            schedule.push(event);
            return schedule;
        });
    return schedules.concat(schedulesWithCurrentEvent);
}
/* --- End of Generating All Schedule Combination Functions --- */


/* --- Start of filtering Schedule Conflicts functions --- */
export function schedConflictsFltr(schedule:ScheduleEvent[]) {
    let noConflicts:boolean = true;
    schedule.forEach(function(event1:ScheduleEvent) {
        schedule.forEach(function(event2:ScheduleEvent) {
            if (!(event1 === event2)){
                if(hasConflict(event1, event2)){
                    noConflicts = false;
                }
            }
        })
    });
    return noConflicts;
}

export function hasConflict(event1:ScheduleEvent, event2:ScheduleEvent):boolean {
    let hasConflict:boolean;
    hasConflict = event1.startTime <= event2.endTime;
    hasConflict = hasConflict && event1.endTime >= event2.startTime;
    hasConflict = hasConflict || (
                    event1.endTime >= event2.startTime && 
                    event1.startTime <= event2.endTime
                  );
    return hasConflict;
}
/* --- End of filtering Schedule Conflicts functions --- */
console.log(runTests());
console.log((new Date()).getSeconds());