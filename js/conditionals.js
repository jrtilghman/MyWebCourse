let numOne = 1;
let stringOne ='1';

console.log(`double == `, numOne == stringOne);
console.log(`triple === `, numOne === stringOne);

const day = new Date().getDay();
//  0 = Sunday 1 = Monday ....  6 = Saturday
let dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  console.log(`It's ${dayArray[day]}`);
 if(day === 1){
     console.log("Back to Work :(");
 }else if(day === 3){
     console.log("Mike Mike Mike Mike Mike ... guess what day it is? HUMP DAAAAYYYY!");
 }else if(day === 6 || day === 0){
     console.log("It's the weekend!");
 }else{
     console.log("It's a weekday");
 }