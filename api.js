const superagent = require('superagent');

const base = 'https://www.themealdb.com/api/json';
//www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

const extractValue = (array, property) => {
    let extractedValue = array.map(item => item[property]);
    return extractedValue;
};


const getCategory = async (category) => {
    try {
        const categoryURL = `${base}/v1/1/filter.php?c=${category}`;
        
        const res = await superagent.get(categoryURL);
        //console.log(res.body);
        /* const displayCat = res.body.meals;
        //console.log(displayCat);
        const result = extractValue(displayCat, 'strMeal');
        const mealId = extractValue(displayCat, 'idMeal');
        const categoryObjects = Object.values(res.body.meals);
        console.log(categoryObjects[1].strMeal); */

        return res.body;
    
    } catch (error) {
        console.log(error);
    }
};

const getRecipe = async (recipeId) => {
    try {
        const recipeURL = `${base}/v1/1/lookup.php?i=${recipeId}`;
        const resRecipe = await superagent.get(recipeURL);
        const recipe = resRecipe.body.meals;
        const result = extractValue(recipe, 'strMeal');
        console.log(recipe);
        return result;
    
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    //same as getRecipe : getRecipe
    getCategory,
    getRecipe
};

//getRecipe(52772);
//getCategory('Seafood');