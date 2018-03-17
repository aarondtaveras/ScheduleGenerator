/**
 * Controller functions for week calendar
 */
import * as $ from 'jquery';
import 'fullcalendar';
import {ScheduleEvent} from './datamodels/schedule-event';
import { timeConvertFuncs } from './real-scheduler-convert';


export function setUpCalendar(){
    let calendarDiv:JQuery = $("#calendar");
    let firstDate:Date = new Date(2010, 10, 8);
    let lastDate:Date = new Date(2010, 10, 8 + 7);
    let tcf = timeConvertFuncs(firstDate, lastDate);
    let numericToReal = tcf[0];
    let realToNumeric = tcf[1];
    calendarDiv.fullCalendar({
        defaultView: 'agendaWeek',
        firstDay: 1
    });
    calendarDiv.fullCalendar('gotoDate', firstDate);
    return {
        displayEvent: function displayEvent(event:ScheduleEvent){
            let name:string = event.eventName + " ("+event.eventGroup+")";
            let numericStartTime:number = event.startTime;
            let numericEndTime:number = event.endTime;
            let realStart:Date = numericToReal(numericStartTime);
            let realEnd:Date = numericToReal(numericEndTime);
            console.log(numericStartTime);
            console.log(realStart);
            console.log(realEnd);
            calendarDiv.fullCalendar("renderEvent",{
                id:1,
                title:name,
                start:realStart,
                end:realEnd
            });
        },
        displayEvents: function displayEvents(events:ScheduleEvent[]){
            for(let i=0;i<events.length;i++){
                this.displayEvent(events[i]);
            }
        }
    }
}