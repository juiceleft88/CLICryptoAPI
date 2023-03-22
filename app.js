//be able to interact with our application
const api = require('./api.js');

const prompts = require('prompts');



/* const searchPrompt = async (category) => {
    const displayCategories = api.getCategory(category).map(cat => {
        return {strMeal: `${cat.strMeal}`, strMealThumb: `${cat.strMealThumb}`, id: `${cat.idMeal}`};
    }); 
    const displayCategories = await api.getCategory(category);
    //const displayRecipe = await api.getCategory(category).mealId;
    //console.log(displayRecipe);
    const mealType = displayCategories;
    

    return await prompts([
        {
            type: 'multiselect',
            name: 'Recipe Categories',
            message: 'Select the recipe category to explore',
            choices: mealType
        }
        //onsubmit(getRecipe(prompts, getRecipe(mealType)));
    ]);
}; */

const searchPrompt = async (results) => {
    const displayCategories = results.map((result) => {
        return {title: `${result.strMeal}`, value: result.idMeal};
    }); 
    return await prompts([
        {
            type: 'select',
            name: 'Recipe Categories',
            message: 'Select the specific recipe to explore',
            choices: displayCategories
        }
    ]);
};

const search = async (args) => {
    //uses the user selection to retrieve meal
    const res = await api.getCategory(args);
    //console.log(res);
    const selected = await searchPrompt(res.meals);
    //console.log(res.meals);
    const recipeFull = await api.getRecipe(selected['Recipe Categories']);

    return res;
};

module.exports = {
    //same as getRecipe : getRecipe
    search
};

//console.log(search('Beef and Mustard Pie'));