//be able to interact with our application
const api = require('./api.js');

const prompts = require('prompts');



const searchPrompt = async (category) => {
    const displayCategories = category.map((cat) => {
        return {recipeName: `${cat.strMeal}`, id: cat.idMeal};
    });
    return await prompts([
        {
            type: 'multiselect',
            name: 'Recipe Categories',
            message: 'Select the recipe category to explore',
            choices: displayCategories
        }
    ]);
};
//www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

module.exports = {
    //same as getRecipe : getRecipe
    searchPrompt
};
