/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const articleElement = document.createElement("article");
        const h3Element = document.createElement("h3");
        h3Element.textContent = temple.templeName; 
        const imgElement = document.createElement("img");
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        templesElement.appendChild(articleElement);

    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () =>{
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const templeData = await response.json();
    templeList = templeData;
    displayTemples(templeList);
}



/* reset Function */
const reset = () =>{
    return templesElement.innerHTML = '';
}

/* filterTemples Function */
function filterTemples(temples){
    reset();
    let filter = document.getElementById("filtered").value;
    switch(filter){
        case "utah":
            displayTemples(temples.filter(temple => temple.location.toLowerCase().includes("utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.toLowerCase().includes("utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "alphabetical":
            displayTemples(temples.slice().sort((a, b) => a.templeName.localeCompare(b.templeName)));
            break;
        case "all":
            displayTemples(temples);
            break;
        default:
            console.error('Invalid filter value:', filter);
            break;
    }
}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)});
