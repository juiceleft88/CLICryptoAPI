const yargs = require('yargs/yargs');                   // using yargs to parse our arguments

const app = require('./app');                         // accessing local module on our computer. app.js has exported an object

yargs(process.argv.slice(2))                            // process object (retrives arguments). interested in elements beyone the first two
    // $0 expands file name
    // <> indicate the command is mandatory
    // [] indicate the command options are optional
    .usage('$0: Usage <command> [options]')             
    .command(                                           
    // commands and command argument                    
        'search <category>',                                         
        'search for a meal category',                              
        // builder function
        (yargs) => {                                    // receives the yargs instance as an argument and is used to provide command-specific configurations.
            return yargs                                // we need to return our configuration so the yargs instance can handle processing 
                .positional('category', {               // configure a command's positional arguments with an API.  
                    describe: 'name of the recipe category',       
                    type: 'string',       
                })
        }, 
        //handler function 
        (args) => {                         // args is the argument that is passed in from the CLI. yargs is parsing this data
        // search for a meal. Direct the flow to the API
            app.searchMeal(args);     // we have the app object. 
        }
    )
    .help().argv;       
    // help() creates our help menu for people using our CLI                           
    // argv gets the arguments as a plain javascript object and passes them to handler (when used)