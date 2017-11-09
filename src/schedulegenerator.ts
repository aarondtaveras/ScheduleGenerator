import {ScheduleEvent} from './datamodels/scheduleevent';

let testEvents:ScheduleEvent[] = [];
let testEvents2:ScheduleEvent[] = [];
let e = new ScheduleEvent(20, 30, 'section 310', 'Math course');
let e2 = new ScheduleEvent(20, 30, 'section 310', 'Math course');
testEvents.push(e);
testEvents2.push(e);

testEvents2[0].eventName = "happy";

console.log(testEvents)
console.log(testEvents2)