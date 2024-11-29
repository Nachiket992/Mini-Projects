let targetTime = new Date();
let targetDate = targetTime.getDate();

let hour;
let minutes;
let seconds;
let timeDuration;

// targetTime.setFullYear(prompt("Enter the 'Year'."));
// targetTime.setMonth(prompt("Enter the 'Month'."));
// targetTime.setDate(prompt("Enter the 'Date'."));
// targetTime.setHours(prompt("Enter hours according to 24h former."));
// targetTime.setMinutes(prompt("Enter the 'Minutes'."));
// targetTime.setSeconds(prompt("Enter the the 'Seconds'."));

let currentTime = new Date ('1-1-2025');

let currentYear = currentTime.getFullYear();

console.log("Current Time :-");
console.log(currentTime);
console.log("Total Second :-",(currentTime.getHours()*60*60 + currentTime.getMinutes()*60 + currentTime.getSeconds()));
console.log("Day :-", currentTime.getDay())
console.log(" ");


console.log("Target Time :-");
console.log(targetTime);
console.log(" ");

console.log("Year :-", targetTime.getFullYear())
console.log("Month :-", targetTime.getMonth())
console.log("Date :-", targetTime.getDate())
console.log("Day :-", targetTime.getDay())
console.log("Hours :-", targetTime.getHours())
console.log("Minutes :-", targetTime.getMinutes())
console.log("Seconds :-", targetTime.getSeconds())
console.log(" ");

console.log("N");
console.log(currentYear);

if(currentYear%4==0) {

    if(currentYear%100==0) {

        if(currentYear%400==0) {
            
            console.log("Leap Yaer");
            
        } else {
            
            console.log("Normal Year");
            
        }
        
    } else {
        
        console.log("Leap Year");

    }
}


