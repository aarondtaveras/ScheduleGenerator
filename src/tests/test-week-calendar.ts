
import * as $ from 'jquery';
import 'fullcalendar';

import { setUpCalendar } from '../week-calendar';
import { ScheduleEvent } from '../datamodels/schedule-event';



export function runTests(){
    let calendar = setUpCalendar()
    let event = new ScheduleEvent(500, 520,false, 'section 310', 'Math course');
    calendar.displayEvent(event);
    let event = new ScheduleEvent(400, 420,false, 'section 320', 'Math course');
    calendar.displayEvent(event);

    let event1 = new ScheduleEvent(200, 220,false, 'section 330', 'Math course');
    let event2 = new ScheduleEvent(300, 320,false, 'section 340', 'Math course');
    calendar.displayEvents([event1, event2]);
    return "test-week-calendar";
}