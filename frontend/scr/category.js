class Category{
    constructor(id, name, image_scr){
        this.id = id;
        this.name = name;
        this.image_scr = image_scr;
    }

    // instace method that renders object to dom
    renderCategory(){
        let categoryContainer = document.getElementById("category-container")

        categoryContainer.innerHTML += 
        `
        <ul>
            <li> ${this.name} </li>
        </ul>
        `
    }
}