/* W02-Task - Profile Home Page */


/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Valdemar Lasnibat";
const currentYear = new Date().getFullYear();
const profilePicture = "images/pp.jpg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodELement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `This is ${fullName}. He is a student at BYU-Pathway.`);


/* Step 5 - Array */
let favfood = ["Pizza", "Tacos al pastor", "Lassagna", "Burgers", "Cochinita Pibil", "Chicken", "Beef", "Pasta", "Barbacoa"];
foodELement.innerHTML = favfood;
let newFood = "Chocolate";
favfood.push(newFood);
foodELement.innerHTML += `<br>${favfood}`;
favfood.shift();
foodELement.innerHTML += `<br>${favfood}`;
favfood.pop();
foodELement.innerHTML += `<br>${favfood}`;






