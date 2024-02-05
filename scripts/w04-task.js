/* Object Literal */
let myProfile = {
    name: "Valdemar Lasnibat",
    photo: "images/pp.jpg", 
    favoriteFoods: [
        "Tacos",
        "Pizza",
        "Enchiladas",
        "Chilaquiles",
        "Mole",
        "Hot Dogs",
        "Roasted Chicken"
    ],
    hobbies: [
        "Playing VideoGames",
        "Reading",
        "Hanging out",
        "Taking a Walk",
        "Learning New Things",
        "Listening Music"
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    { place: "Villahermosa, Tab", length: "10 years" },
    { place: "Hermosillo, Son", length: "1 year" },
    { place: "Puebla, Pue", length: "1 year" },
    { place: "GAM, CDMX", length: "7 years" }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    document.querySelector("#places-lived").appendChild(dt);

    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dd);
});
