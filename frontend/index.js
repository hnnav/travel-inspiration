document.addEventListener('DOMContentLoaded', () => {
    fetchCategories()
});

const BASE_URL = "http://localhost:3000"

// read - fetch categories index
function fetchCategories(){

    fetch(`${BASE_URL}/categories`)

    // take response and convert to json
    .then(resp => resp.json())

    // do something wih fetched data
    .then(categories => {
        for (const category of categories){
            let c = new Category(category.name, category.image_scr, category.id)
            c.renderCategory();
        }
    } )
}

// read - fetch destination index

// create - create a new destination

// add this when clicked on category
function createForm(){
    let destinationForm = document.getElementById("destination-form")

    destinationForm.innerHTML +=
    `
    <form>
        <label> Location: </label> <input type="text" id="name"><br>
        <label> Describe destination: </label> <input type="text" id="description"><br>
        <label> Add an image: </label> <input type="text" id="image_scr">
        <input type="submit" value="Create Destination">
    </form>
    `
    destinationForm.addEventListener("submit", destinationFormSubmission)
}

function destinationFormSubmission(){
    event.preventDefault();
    let name = document.getElementById("name").value
    let description = document.getElementById("description").value
    let image_scr = document.getElementById("image_scr").value

    let destination = {
        name: name,
        description: description,
        image_scr: image_scr,
    }

    fetch(`${BASE_URL}/categories`{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(destination)
    })
    .then(resp => resp.json())
    .then(destination => {
        let d = new Destination(destination.id, destination.name, destination.description, destination.image_scr)
        d.renderDestination();
    })
}


