const api = require('./api.js');
const app = require('./app.js');

const fs = require('fs');

let data = 'This file will contain the history of searched recipes';

const data2 = {
    search : 'Hello',
    resultCount: 'There'
};

fs.writeFile('recipeHistory.json', data, (err) => {
    if (err){
        console.log(err);
    } else {
        console.log('File written succesfully \n');
        console.log('The written file has the following contents:');
        console.log(fs.readFileSync('recipeHistory.json', 'utf-8'));
    }
});