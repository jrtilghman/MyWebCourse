let hobbies = [{name: 'Devin', lengthInYearsAtHobby: 1.4},{name: 'Sports', lengthInYearsAtHobby: 34},{name: 'Travel', lengthInYearsAtHobby: 18}];

function hobbyDisplay(hobby){
    console.log(`${hobby.name} enjoyed for ${hobby.lengthInYearsAtHobby} years`);
}

hobbies.forEach(element => {
    hobbyDisplay(element);
});

let band1 = {
    name : "AeroSmith",
    city : "Boston" ,
    country : "USA",
    yearFormed : 1965,
    genres : ["Progressive rock", "psychedelic rock", "art rock"]
}
band1.genres = new Array("Progressive rock2", "psychedelic rock2", "art rock2");

const band2 = new Object();
band2.name = "The Roots";
band2.city = "Philadelphia";
band2.country = "USA";
band2.yearFormed = "1990";
band2.genres = ['Soul', 'Neo-Soul'];

let bands = new Array(band1, band2);

bands.forEach(element => {
   console.log(element);
});


function band(name, city, country, yearFormed, genres){
this.name = name;
this.city = city;
this.country = country;
this.yearFormed = yearFormed;
this.genres = genres;

}