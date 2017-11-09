console.log("scheduler-generator");
import {Test} from './test';
//later we will make a datamodels folder for these classes
//that only contain data.
class ScheduleEvent {
    priority:number;//this is how you set properties
    constructor(public startTime:number,
                public endTime:number,
                public eventName:string,
                public eventGroup:string){}//the public keyword in constructor auto sets these properties
}

let testEvents:ScheduleEvent[] = [];
let e = new ScheduleEvent(20, 30, 'section 310', 'Math course');
testEvents.push(e);
console.log("this is a test");
console.log(testEvents);
console.log(e.startTime);
console.log(e.endTime);

let t = new Test();
console.log(t);
