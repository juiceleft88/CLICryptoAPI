const superagent = require('superagent');               // HTTP request

const filterByCategory = async (category) => {
    try {
        const searchUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
        const res = await superagent.get(searchUrl);

        return res.body.meals;                                // our response body
    } catch (error) {
        console.log(error);
    }
}

const returnRecipe = async (mealId) => {
    try {
        const searchUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        const res = await superagent.get(searchUrl);
        return res.body;
    } catch (error) {
        console.log(error);
    }
}

// module.exports pairs with our require method. Require brings files in. Export is opposite
module.exports = {          // set it equal to an object. Using short hand notation here (objects)
    filterByCategory,
    returnRecipe            
};         