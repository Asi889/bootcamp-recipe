const express = require('express')
const app = express()
const path = require('path')
const urllib = require('urllib')
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get(`/sanity`, function (req, res) {
    console.log("having a blast")
    res.send(`so, so`)
})

app.get('/recipes/:ingredient', function (request, response) {
    let ingredient = request.params.ingredient
    const mainIngredient = ingredient
    const recipes = []



    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, data, res) {
        if (err) {
            throw err;
        }
        const mealArray = JSON.parse(data).results
        console.log(mealArray)
        

        // for (let meal of mealArray) {
        //     if (meal.ingredients) {
        //         for (let ing of ingredients) {
        //             if (ing === mainIngredient) {

        //                 const deMeal = {
        //                     title: ing.title,
        //                     ingredients: ing.ingredients,
        //                     pic: ing.thumbnail
        //                 }
        //                 recipes.push(deMeal)
        //             }
        //         }
        //     }
        // }
        response.send(mealArray)
    })

})




const port = 8080
app.listen(port, function () {
    console.log(`Running server on port ${port} brace yourself... O_o`)

})