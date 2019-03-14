let hobbies = ['DEVIN!', 'Sports', 'Travel'];
let myColor = ["Red", "Green", "White", "Black"];

function printHobbies(hobbiesArray){    
    console.log(`I like ${hobbiesArray.length} things:`);
    for (let index = 0; index < hobbiesArray.length; index++) {
        console.log(`I like ${hobbiesArray[index]}`);        
    }
}

printHobbies(hobbies);
console.log(myColor.join('+'));