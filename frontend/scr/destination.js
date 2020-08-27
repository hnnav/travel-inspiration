class Destination{
    constructor(id, name, image_scr, description, category){
        this.id = id;
        this.name = name;
        this.image_scr = image_scr;
        this.description = description;
        this.category = category;
    }

    renderDestination(){
        let destinationContainer = document.getElementById("destination-container")
        
        destinationContainer.innerHTML += 
        `
        <div id="${this.id}">
            <h3 id="destination-name" > ${this.name} <h3>
            <small id="destination-category" > Category: ${this.category.name} </small>
            <p id="destination-description"> ${this.description} </p>
            <button class="edit-btn" data-id="${this.id}" onclick="renderEditForm()"> Edit </button>
            <div></div>
        </div>
        `
    }
}