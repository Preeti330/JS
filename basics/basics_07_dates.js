// in js we use Date() object to generate the date . 
// date represent the single moment in time platform independent.
// this objects encapsulate an integral number sinse 01 jan 1970.
// we some function to get date to other formats like 
//toIsoDate()
let datetoday=new Date();
console.log(datetoday);
console.log(datetoday.toDateString());
console.log(datetoday.toISOString());
console.log(datetoday.toLocaleString()) 
let dayYearmonth=new Date("2024-02-12")
console.log(dayYearmonth)