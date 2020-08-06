class Category{
    constructor(name, image_scr, id){
        this.name = name;
        this.image_scr = image_scr;
        this.id = id;
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