const hobbiesArray = [
    { name: 'volleyball', lengthInYearsAtHobby: 25 },
    { name: 'cooking', lengthInYearsAtHobby: 15},
    { name: 'swimming', lengthInYearsAtHobby: 11}
];

function logHobby(oneHobby) {
    console.log(`${oneHobby.name}: A hobby for ${oneHobby.lengthInYearsAtHobby} years`)
}

function returnHobbiesHTML(){
   let hobbiesOut =`<ul>`;  
        hobbiesArray.forEach(element => {
            hobbiesOut += `<li>${element.name} has been my hobby for ${element.lengthInYearsAtHobby} years!</li>`
        });
   return hobbiesOut +=`</ul>`
}

function logHobbies() {
    for (let index = 0; index < hobbiesArray.length; index++) {
        const hobby = hobbiesArray[index];
        logHobby(hobby);
    }
}

logHobbies();