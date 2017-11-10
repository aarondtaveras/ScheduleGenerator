import {ScheduleEvent} from '../datamodels/schedule-event';
import {generateDictionary} from '../schedule-generator';





export function testGenerateDictionary(){
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
   generateDictionary(testSchedule);
}