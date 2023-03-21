const prompts = require('prompts');

const api = require('./api.js');

const superagent = require('superagent');               // HTTP request


// application logic
const _selectMeal = async (options) => {
    try {

        const selection = options.map(element => {
            return {title: `${element.strMeal}`, value: element.idMeal};
        })
        return await prompts([
            {
                type: 'select',
                name: 'mealSelection',
                message: 'Select the recipe category to explore',
                choices:  selection
            }
        ]);
    } catch {
        console.log('Not a valid meal category');
    }
};

const _searchRecipe = async (mealId) => {
    try {
        console.log(mealId);
        const recipe = await api.returnRecipe(mealId);
        return recipe;

    } catch (error){
        console.log(error);
    }
}
const searchMeal = async (args) => {                  // arguments user passes in         
    try {
  
        // we are we destructuring but then using the dot notation still?
        const {category} = args;
        const mealCategories = await api.filterByCategory(args.category);

        const meal = await _selectMeal(mealCategories);
        const id = meal.mealSelection;
        
        const details = await _searchRecipe(id);
       
        console.log(details.meals);



    } catch (error) {
        console.log(error);
    } 
};



module.exports = {
    searchMeal,            // set it equal to an object. Using short hand notation here (objects)
    _searchRecipe
};       