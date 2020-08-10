class Destination{
    constructor(name, description, image_scr, id, category_id){
        this.name = name;
        this.description = description;
        this.image_scr = image_scr;
        this.id = id;  
        this.category_id = category_id;
    }

    // instace method that renders object to dom
    //renderDestination(){
//
    //    let li = document.querySelector(data-category-id= 1);
    //    
    //    li.innerHTML =+
    //    `
    //    ${this.name}
    //    <button class="delete-button" data-id=${this.id} onclick="deleteDestination()"> Delete destination </button>
    //    `
    //}
}