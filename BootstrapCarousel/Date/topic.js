let topicsArray = [
    "沒有賽程",
    "一場賽程",
    "兩場賽程",
    "一場賽程",
    "兩場賽程",
    "兩場賽程",
    "兩場賽程"
];

let startDate = new Date();
function setMonthAndDay(startMonth,startDay){
    startDate.setMonth(startMonth-1,startDay)
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
setMonthAndDay(4,13);