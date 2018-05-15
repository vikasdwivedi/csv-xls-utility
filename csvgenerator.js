var fs = require('fs');
const input =  require('./input/test1');
var outFilename = 'output.csv';

var dryArray = input.JsonInput.start.map(function (element) {
   return [element.name, (typeof element.value == "string") ? (element.value.replace('\\', '').replace(/,/g, '|')): element.value];
});

//separating into new line
var outCSV = dryArray.join('\n');

fs.writeFile(outFilename, outCSV, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log('FILE GENERATED SUCCESSFULLYs!\n');
})



