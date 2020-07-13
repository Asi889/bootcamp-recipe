

$(`#btn`).click(function () {
    const ingredientInput = $(`#inyput`).val()

    const retrivedata = function () {

        $.get(`/recipes/${ingredientInput}`, (recipe) => {
            $(`#food`).empty()
            recipe.forEach(rec => {

                let recipeList =

                    `<div id="main"><p>${rec.title}</p> 
                    <img id="pic" src="${rec.thumbnail}" onerror="this.src='https://image.chitra.live/api/v1/wps/5c355ce/9e7cb112-37f4-4fd0-95d5-62fe96d0067b/2/Britney-Spears-350x250.jpg'">
                    <p>Ingredients</p>
                    <ul><li>${rec.ingredients}</li></ul>`
                $(`#food`).append(recipeList)
            });

        })
    }
    retrivedata()

})

