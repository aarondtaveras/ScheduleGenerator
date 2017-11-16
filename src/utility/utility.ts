/* utility functions */
export function getPropCounts(dic):number[]{
    /*  takes object returns array of
        lengths of properties */
    let dicKeys:string[] = Object.keys(dic);
    let dicCounts = dicKeys.map(function(key):number{
        return dic[key].length;
    })
    return dicCounts;
}
