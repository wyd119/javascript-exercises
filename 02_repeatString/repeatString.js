const repeatString = function(strArg, numArg) {
    if (numArg < 0){
        finalString = 'ERROR';
    } else if (numArg === 0){
        finalString = '';
    } else {
        finalString = strArg;
        for (let i = numArg; i > 1; i--) {
            finalString += strArg;
        }
    }
    console.log(finalString)
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;


// repeatString('hi',10);