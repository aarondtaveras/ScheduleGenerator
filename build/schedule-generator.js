console.log("scheduler-generator");
var ScheduleEvent = (function () {
    function ScheduleEvent(startTime, endTime, eventName, eventGroup) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.eventName = eventName;
        this.eventGroup = eventGroup;
    }
    return ScheduleEvent;
}());
var testEvents = [];
var e = new ScheduleEvent(20, 30, 'section 310', 'Math course');
testEvents.push(e);
console.log(testEvents);
console.log(e.startTime);
console.log(e.endTime);
//# sourceMappingURL=schedule-generator.js.map