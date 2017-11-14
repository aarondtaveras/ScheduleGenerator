import {ScheduleEvent} from './datamodels/schedule-event';
import {runTests} from './tests/test-generate-dictionary'
import * as _ from "lodash";

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

/* utility functions */
function getPropCounts(dic):number[]{
    /*  takes object returns array of
        lengths of properties */
    let dicKeys:string[] = Object.keys(dic);
    let dicCounts = dicKeys.map(function(key):number{
        return dic[key].length;
    })
    return dicCounts;
}

/* schedule specific */
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

/* Entry point for generating schedules */
export function generateSchedules(eventsByGroup:{}, startIndex=0):ScheduleEvent[][]{
    let eventGroups:string[] = Object.keys(eventsByGroup);
    let currentGroup:string = eventGroups[startIndex];
    let currentGroupEvents:ScheduleEvent[] = eventsByGroup[currentGroup];
    let schedules:ScheduleEvent[][] = [];

    if(startIndex === eventGroups.length-1){
        return currentGroupEvents.map(function(event:ScheduleEvent):ScheduleEvent[]{
            return [_.cloneDeep(event)];
        })
    }

    currentGroupEvents.forEach(function(event:ScheduleEvent){
        let nextSchedules:ScheduleEvent[][] = generateSchedules(eventsByGroup, startIndex+1);
        //console.log(nextSchedules);
        let schedulesWithCurrentEvent:ScheduleEvent[][] = nextSchedules.map(
            function(schedule:ScheduleEvent[]):any{
                schedule.push(event);
                return schedule;
            });
        schedules = schedules.concat(schedulesWithCurrentEvent);
    })
    return schedules;
}

function addEventToSchedule(event:ScheduleEvent, schedules:ScheduleEvent[]){
    schedules.push(event);

}



runTests();