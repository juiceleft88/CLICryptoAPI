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
        console.log('No valid options to select for this meal search');
    }
};

const searchMeal = async (args) => {                  // arguments user passes in         
    try {
        
        const mealCategories = await api.filterByCategory(args.category);
        // call a storefunction provided by our History.js 
        // store the category in our search key
        // store a count for resultCount
        
        const meal = await _selectMeal(mealCategories);
        const id = meal.mealSelection;
        
        const details = await api.returnRecipe(id);
       
        console.log(details);



    } catch {
        console.log('Invalid meal category');
    } 
};



module.exports = {
    searchMeal,            // set it equal to an object. Using short hand notation here (objects)
};       

