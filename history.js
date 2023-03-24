const app = require('./app');
const fs = require('fs');
const fileName = './searchHistory.json';
const file = require(fileName);


const saveSearch = async (search, resultCount) => {
   let history = [];
    if (fs.existsSync(fileName)) {
        const extractedData = fs.readFileSync(fileName, 'utf-8');
        history = JSON.parse(extractedData);
    }
    
    history.push({search, resultCount});

    fs.writeFile(fileName, JSON.stringify(history), function writeJSON(err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(file));
        console.log('writing to ' + fileName);
      });
}

module.exports = {
    saveSearch
}