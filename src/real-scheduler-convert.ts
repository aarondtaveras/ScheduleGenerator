export function timeConvertFuncs(firstDate:Date, lastDate:Date){
    let timePeriod:number = lastDate - firstDate;
    let maxNumericTime:number = 1000;

    function getRealTime(numericTime:number):Date {
        /* The scheduler uses numbers between 0-1000 to represent all dates
            in the specified timePeriod. This takes a number date and
            returns the corresponding date object.
        */
        let nanosecondsAfterFirstDate:number = timePeriod * numericTime / maxNumericTime;
        let nanosecondsDate:number = firstDate.getTime() + nanosecondsAfterFirstDate;
        let realDate:Date = new Date(nanosecondsDate);
        return realDate;
    }

    function getNumericTime(realDate:Date):number {
        /*Does the reverse of getRealTime (see getRealTime)*/
        let numericTime = (realDate - firstDate)/timePeriod/maxNumericTime;
        return numericTime;
    }

    return [getRealTime, getNumericTime];
}