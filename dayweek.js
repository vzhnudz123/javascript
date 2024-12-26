function getday(day){
    switch(day){
        case 1: return "monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 7: return "Sunday";
        default: return "invalid input";
    }
}


let day=5;
let dayofweek=getday(day);
console.log("day of week",dayofweek);

