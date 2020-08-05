# Travel inspiration app

## Models

Categories
- Have many destinations
- Name:string, image_scr:string

Destinations
- belong to categories
- Name:string, description:text, image_scr:string

## Routes

category/:id/destination/:id