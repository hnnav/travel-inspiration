class Destination{
    constructor(name, description, image_scr, id){
        this.id = id;
        this.name = name;
        this.image_scr = image_scr;
        this.description = description;
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
        `
    }
}