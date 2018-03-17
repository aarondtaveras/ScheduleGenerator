import { ScheduleEvent } from './schedule-event'
export class Schedule {
    constructor(public  scheduleEvents:ScheduleEvent[],
                public startDate:Date,
                public endDate:Date){}
}