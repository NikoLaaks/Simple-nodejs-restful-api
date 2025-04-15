// Imports
const path = require("path")
const express = require("express")
const exphbs = require("express-handlebars")
require("dotenv").config()

// JSON dataset
let recipes = require("./data/recipes.js")

//App setup
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.engine("handlebars", exphbs.engine({defaultLayout: "main"}))
app.set("view engine", "handlebars")
app.use(express.static("public"))

//Routes
app.get("/", (req,res) => {
    res.render("home", {title:"home page"})
})

// Get all recipes
app.get("/api/recipes", (req,res) => {
    res.status(200).json({
        status: "success",
        results: recipes.length,
        data: recipes
    })
})

// Get one recipe by id
app.get("/api/recipes/:id", (req,res) => {
    const id = Number(req.params.id)
    const recipe = recipes.find(recipe => recipe.id === id)
    if (recipe){
        res.json(recipe)
    }else{
        res.status(404).json({msg: "recipe not found"})
    }
})

// Delete one recipe by id
app.delete("/api/recipes/:id", (req,res) => {
    const id = Number(req.params.id)
    if(recipes.find(recipe => recipe.id === id)){
        recipes = recipes.filter(recipe => recipe.id != id)
        res.status(200).json({id : id})
    }else{
        res.status(404).json({Response_body: "Error when deleting recipe"})
    }
})

// Create new recipe
app.post("/api/recipes", (req,res) => {
    const newID = recipes[recipes.length-1].id + 1
    const newRecipe = {
        id: newID,
        title: req.body.title,
        ingredients: req.body.ingredients,
        cookTimeMinutes: req.body.cookTimeMinutes,
        vegetarian: req.body.vegetarian,
        createdAt: req.body.createdAt,
        author: req.body.author
    }
    recipes.push(newRecipe)

    res.location("/api/recipes/"+ newID)
    res.status(201).json({
        Body: newRecipe
    })
})

// Update recipe by id
app.patch("/api/recipes/:id", (req,res) => {
    const id = Number(req.params.id)
    const newTitle = req.body.title
    const newIngredients = req.body.ingredients
    const newCookTimeMinutes = req.body.cookTimeMinutes
    const newVegetarian = req.body.vegetarian
    const newCreatedAt = req.body.createdAt
    const newAuthor = req.body.author

    const recipe = recipes.find(recipe => recipe.id === id)

    if(recipe){
        if(newTitle !== undefined)recipe.title = newTitle
        if(newIngredients !== undefined)recipe.ingredients = newIngredients
        if(newCookTimeMinutes !== undefined)recipe.cookTimeMinutes = newCookTimeMinutes
        if(newVegetarian !== undefined)recipe.vegetarian = newVegetarian
        if(newCreatedAt !== undefined)recipe.createdAt = newCreatedAt
        if(newAuthor !== undefined)recipe.author = newAuthor
        res.status(200).json({
            body: recipe
        }) 
    }else{
        res.status(404).json({msg: "Could not update"})
    }
})

// Handlebars
// Display all recipes
app.get("/recipes", (req,res) => {
    res.render("recipes", {
        title: "All recipes",
        recipes: recipes
    })
})

// Error handler
app.use((req,res,next) => {
    const error = new Error("Not found")
    error.status = 404
    next(error)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))



