let hobbies = ['DEVIN!', 'Sports', 'Travel'];
let myColor = ["Red", "Green", "White", "Black"];
let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function printHobbies(hobbiesArray){    
    console.log(`I like ${hobbiesArray.length} things:`);
    for (let index = 0; index < hobbiesArray.length; index++) {
        console.log(`I like ${hobbiesArray[index]}`);        
    }
}

let array1 =[];
let array2 = [];

arr1.sort();
console.log(`arr1.entries ${arr1.entries}`);
console.log(`arr1.map ${arr1.map}`);

let mostOccurences = 0;
let valueWithMostOccurences = '';
for (let index = 0; index < arr1.length; index++) {
    const value = arr1[index];
    const firstIndex = arr1.indexOf(value);
    const lastIndex = arr1.lastIndexOf(value)
    //add 1 b/c array indexes start at 0
    const numOfOccurencesInArray = lastIndex-firstIndex + 1;
   

    if(index===0){
        mostOccurences = numOfOccurencesInArray;
        valueWithMostOccurences = value;
        index = lastIndex;
    }else{
        if(numOfOccurencesInArray > mostOccurences){
            mostOccurences = numOfOccurencesInArray;
            valueWithMostOccurences = value;
            index = lastIndex;
        }
    }
    
}

console.log(arr1);
console.log(`${valueWithMostOccurences} occurs most with ${mostOccurences} entries`)


printHobbies(hobbies);
console.log(myColor.join());
console.log(myColor.join('+'));