class Category{
    constructor(id, name, image_scr, destinations){
        this.id = id;
        this.name = name;
        this.image_scr = image_scr;
        this.destinations = destinations;
    }

    renderCategory(){
        let categoryContainer = document.getElementById("category-container")
        
        categoryContainer.innerHTML += 
        `
        <h3 class="categoryHeader" > ${this.name} <h3>
        <button class="delete-button" data-id="${this.id}" onclick="deleteCategory();"> Delete </button>
        <ul id="${this.id}"> </ul>
        `
        let list = document.getElementById(this.id)
        let destinations = this.destinations
        for (const destination of destinations) {
            list.innerHTML +=
            `
            <p> ${destination.name} </p>
            <li> ${destination.description} </li>
            `
        }
    }
}