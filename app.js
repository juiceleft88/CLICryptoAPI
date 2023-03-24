const prompts = require('prompts');
const api = require('./api.js');
const superagent = require('superagent');               // HTTP request
const history = require('./history.js');

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

const searchMeal = async (args) => {                  // arguments user passes in         
    try {
        
        const mealCategories = await api.filterByCategory(args.category);
        const meal = await _selectMeal(mealCategories);
        
        let result = mealCategories.length; 
        const id = meal.mealSelection;
        
        await history.saveSearch(args.category, result);
        
        const details = await api.returnRecipe(id);
       
        console.log(details);



    } catch {
        console.log('Try again with a valid meal category');
    } 
};



module.exports = {
    searchMeal,            // set it equal to an object. Using short hand notation here (objects)
};       

