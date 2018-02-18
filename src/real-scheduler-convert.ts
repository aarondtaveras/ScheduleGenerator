export function timeConvertFuncs(firstDate:Date, lastDate:Date){
    let timePeriod:number = lastDate - firstDate;
    let maxNumericTime:number = 1000;

    function getRealTime(numericTime:number):Date {
        let nanosecondsAfterFirstDate:number = timePeriod * numericTime * maxNumericTime;
        let nanosecondsDate:number = firstDate.getTime() + nanosecondsAfterFirstDate;
        let realDate:Date = new Date(nanosecondsDate);
        return realDate;
    }

    function getNumericTime(realDate:Date):number {
        let numericTime = (realDate - firstDate)/timePeriod/maxNumericTime;
        return numericTime;
    }

    return [getRealTime, getNumericTime];
}