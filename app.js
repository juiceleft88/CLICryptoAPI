//be able to interact with our application
const api = require('./api.js');
const app = require('./app.js');

const prompts = require('prompts');



const searchPrompt = async (category) => {
    /* const displayCategories = api.getCategory(category).map(cat => {
        return {strMeal: `${cat.strMeal}`, strMealThumb: `${cat.strMealThumb}`, id: `${cat.idMeal}`};
    }); */
    const displayCategories = await api.getCategory(category);
    const mealType = displayCategories;

    return await prompts([
        {
            type: 'multiselect',
            name: 'Recipe Categories',
            message: 'Select the recipe category to explore',
            choices: mealType,
            validate: (selected) => {
                const maxSelection = 1;
                if (selected.length > maxSelection){
                    return 'You may only select 1 recipe' ;
                } else {
                    return true;
                }
            }

        }
    ]);
};
//www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

/* const searchRecipeId = async (category) => {
    const buildCat = await api.getCategory(category);
    const getRecId = await buildCat.idMeal;
    console.log(getRecId);
    
}; */

module.exports = {
    //same as getRecipe : getRecipe
    searchPrompt
};

//console.log(searchPrompt('Beef'));