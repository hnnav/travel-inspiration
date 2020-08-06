document.addEventListener('DOMContentLoaded', () => {
    fetchCategories()
});

const BASE_URL = "http://localhost:3000"

// read - fetch categories index
function fetchCategories(){

    fetch(`${BASE_URL}/categories`)

    // take response and convert to json
    .then(resp => resp.json())

    // do something wih fetched data
    .then(categories => {
        for (const category of categories){
            let c = new Category(category.name, category.image_scr, category.id)
            c.renderCategory();
        }
    } )
}

// read - fetch destination index

// 