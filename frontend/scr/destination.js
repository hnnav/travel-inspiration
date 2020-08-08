class Destination{
    constructor(name, description, image_scr, id){
        this.name = name;
        this.description = description;
        this.image_scr = image_scr;
        this.id = id;  
    }

    // instace method that renders object to dom
    renderDestination(){
        let destinationContainer = document.getElementById("destination-container")

        destinationContainer.innerHTML += 

    // do something else here
        `
        <ul>
            <li> ${this.name} </li>
        </ul>
        <button class="delete-button" data-id=${this.id} onclick="deleteDestination()"> Delete destination </button>
        `
    }
}