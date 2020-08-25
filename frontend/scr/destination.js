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
        <h3> ${this.name} <h3>
        <small> Category: ${this.category.name} </small>
        <p> ${this.description} </p>
        <button data-id="${this.id}""> Edit </button>
        `
        }
    }