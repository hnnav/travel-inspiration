document.addEventListener("DOMContentLoaded", () => {
    fetchDestination();
    createDestinationForm();
});

const BASE_URL = "http://localhost:3000"


// FETCH DESTINATION INDEX

function fetchDestination() {
 fetch(`${BASE_URL}/destinations`)
 .then(resp => resp.json())
 .then(destinations => {
     for (const destination of destinations){
         let d = new Destination(destination.id, destination.name, destination.image_scr, destination.description, destination.category)
         d.renderDestination();
     }
     })
}

// NEW DESTINATION FORM

function createDestinationForm() {
    let destinationForm = document.getElementById("new-destination")

    destinationForm.innerHTML +=
     `
     <h3> Create a new destination: </h3>
     <form>
        <input type="text" id="name" placeholder="Name"><br>

        <textarea name="description" id="description" rows="7" cols="30" placeholder="Description"></textarea><br>

        <input type="text" id="image_scr" placeholder="Image link"><br><br>

        <label> Choose a category </label><br>
        <select id="category-select" name="categories"> 
            <option value="1"> City breaks </option>
            <option value="2"> Beach Destinations </option>
            <option value="3"> Family holidays </option>
        </select><br><br>

         <input type="submit" value="Create Destination" >
     </form>
     `

    destinationForm.addEventListener("submit", (e) =>
    destinationFormHandler(e))
}

// HANDLE FORM DATA

function destinationFormHandler(){
    event.preventDefault()

    let name = document.getElementById("name").value
    let description = document.getElementById("description").value
    let image_scr = document.getElementById("image_scr").value
    let categoryId = parseInt(document.getElementById("category-select").value) // returns id
    destinationFormSubmission(name, description, image_scr, categoryId)
}

// SUBMIT FORM DATA

function destinationFormSubmission(name, description, image_scr, category_id){
    fetch(`${BASE_URL}/destinations`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            description: description,
            image_scr: image_scr,
            category_id: category_id
        })
    })
    .then(resp => resp.json())
    .then(destination => {
        let d = new Destination(destination.id, destination.name, destination.image_scr, destination.description, destination.category)
        d.renderDestination();
    })
}


    // 
    // 
    //     fetch(`${BASE_URL}/categories`, {
    //         method: "POST",
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(destination)
    //     })
    //     .then(resp => resp.json())
    //     .then(destination => {
    //         let d = new Destination(destination.id, destination.name, destination.description, destination.image_scr)
    //         d.renderDestination();
    //     })
    // }
// 
// // SUBMIT CATEGORY FORM
// 
// function categoryFormSubmission(){
//     event.preventDefault();
//     let name = document.getElementById("name").value
//     // let image_scr = document.getElementById("image_scr").value
//     
//     let category = {
//         name: name,
//         image_scr: image_scr
//     }
// 
//     fetch(`${BASE_URL}/categories`, {
//         method: "POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(category)
//     })
//     
//     .then(resp => resp.json())
//     .then(category => {
//         let d = new Category(category.id, category.name, category.image_scr)
//         d.renderCategory();
//     })
// }
// 
//
// 
// // Submit new destination
// 
// function destinationFormSubmission(){
//     event.preventDefault();
//     let name = document.getElementById("name").value
//     let description = document.getElementById("description").value
//     let image_scr = document.getElementById("image_scr").value
// 
//     let destination = {
//         name: name,
//         description: description,
//         image_scr: image_scr,
//     }
// 
//     fetch(`${BASE_URL}/categories`, {
//         method: "POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(destination)
//     })
//     .then(resp => resp.json())
//     .then(destination => {
//         let d = new Destination(destination.id, destination.name, destination.description, destination.image_scr)
//         d.renderDestination();
//     })
// }
