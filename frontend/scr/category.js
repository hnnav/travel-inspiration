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
        <h3 data-category-id="${this.id}"> ${this.name} <h3>
        <button class="delete-button" data-id="${this.id}" onclick="deleteCategory();"> Delete </button>
        `
    }
}