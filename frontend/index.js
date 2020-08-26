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
        document.getElementById("new-destination").querySelector('form').reset()
        d.renderDestination()
    })
}

// EDIT - 
// show a form 

// ERROR destination is not being found it chooses the first one

function renderEditForm(){
    
    let destinationId = parseInt(event.target.dataset.id)
    let updateForm = document.getElementById(`${destinationId}`).querySelector('div')

    updateForm.innerHTML +=
    `
        <form data-id="${destinationId}">
          <label>Name</label>
          <p>
            <input type="text" id="edited-name"/>
          </p>
          <label>Description</label>
          <p>
            <textarea id="edited-description"></textarea>
          </p>

          <label> Edit category </label><br>
                <select id="edited-category-select" name="categories"> 
                    <option value="1"> City breaks </option>
                    <option value="2"> Beach Destinations </option>
                    <option value="3"> Family holidays </option>
                </select><br><br>

          <button type='submit'> Save </button>
        </form>
    `

    updateForm.addEventListener("submit", (e) =>
    handleEditData(e))
}

// handle form data
// submit and render 

function handleEditData(){
    event.preventDefault()
    
    let destinationId = parseInt(event.target.dataset.id)
    let name = document.getElementById("edited-name").value
    let description = document.getElementById("edited-description").value
    let categoryId = parseInt(document.getElementById("edited-category-select").value)
    updateDestination(destinationId, name, description, categoryId);
}

function updateDestination(destination_id, name, description, category_id){
    fetch(`${BASE_URL}/destinations/${destination_id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            id: destination_id,
            name: name,
            description: description,
            category_id: category_id
        })
    })
    .then(resp => resp.json())
    .then(updated => {
        console.log(updated)
        location.reload(true);
    });
}
