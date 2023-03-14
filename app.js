//be able to interact with our application

const superagent = require('superagent');

const base = 'https://www.themealdb.com/api/json';
//www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

const getRecipe = async (recipeName) => {
    try {
        const recipeURL = `${base}/v1/1/search.php?s=${recipeName}`;
        console.log(recipeURL);

        const res = await superagent.get(recipeURL);
        console.log(res.body);

        return res.body;
    } catch (error) {
        console.log(error);
    }
};

getRecipe('Pizza');