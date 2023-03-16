//be able to interact with our application
const api = require('./api.js');
console.log(api);

const prompts = require('prompts');


//demo or sample from class
/* const _discardPrompt = async (recipes) => {
    return await prompts([{
        type: 'multiselect',
        name: 'cards',
        message: 'select cards to throw away',
        choices: []
    }]);
}; */
//www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

/* const getRecipe = async (recipeName) => {
    try {
        const recipeURL = `${api.base}/v1/1/search.php?s=${recipeName}`;
        console.log(recipeURL);

        const res = await api.superagent.get(recipeURL);
        console.log(res.body);

        return res.body;
    } catch (error) {
        console.log(error);
    }
}; */
api.getCategory('Goat');
