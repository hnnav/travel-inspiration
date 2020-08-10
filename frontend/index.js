document.addEventListener("DOMContentLoaded", () => {
    fetchCategories();
    createCategoryForm();
});

const BASE_URL = "http://localhost:3000"



// FETCH CATEGORIES INDEX

function fetchCategories(){

    fetch(`${BASE_URL}/categories`)

    .then(resp => resp.json())

    .then(categories => {
        for (const category of categories){
            let c = new Category(category.id, category.name, category.image_scr, category.destinations)
            c.renderCategory();
        }
        })
}

// NEW CATEGORY FORM

function createCategoryForm(){
    let categoryForm = document.getElementById("new-category")

    categoryForm.innerHTML +=
    `
    <h3> Create a new category: </h3>
    <form>
        <label> Name category: </label> <input type="text" id="name"><br>
        <label> Add an image: </label> <input type="text" id="image_scr"><br>
        <input type="submit" value="Create Category">
    </form>
    `

    categoryForm.addEventListener("submit", categoryFormSubmission)
}

// SUBMIT CATEGORY FORM

function categoryFormSubmission(){
    event.preventDefault();
    let name = document.getElementById("name").value
    // let image_scr = document.getElementById("image_scr").value
    
    let category = {
        name: name,
        image_scr: image_scr
    }

    fetch(`${BASE_URL}/categories`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(category)
    })
    
    .then(resp => resp.json())
    .then(category => {
        let d = new Category(category.id, category.name, category.image_scr)
        d.renderCategory();
    })
}

// create - create a new destination

function createDestinationForm(){
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

// Submit new destination

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

    fetch(`${BASE_URL}/categories`, {
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

// delete - delete a destination

function deleteDestination(){
    let destinationId = parseInt(event.target.dataset.id)

    fetch(`${BASE_URL}/destinations/${destinationId}`, {
        method: "DELETE"
    })

    this.location.reload()
}

// DELETE CATEGORY

function deleteCategory(){
    
    let categoryId = parseInt(event.target.dataset.id)
 
    fetch(`${BASE_URL}/categories/${categoryId}`, {
        method: 'DELETE'
    })

    // this.location.reload()
}