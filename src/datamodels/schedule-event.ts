export class ScheduleEvent {
    constructor(public startTime:number,
                public endTime:number,
                public locked:boolean,
                public eventName:string,
                public eventGroup:string){}
}