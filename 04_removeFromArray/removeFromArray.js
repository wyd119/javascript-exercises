const removeFromArray = function(arrayInput, ...valuesToRemove) {
// const removeFromArray = function(arrayInput, value) {
    let arrayResult = arrayInput;
    for (let value of valuesToRemove){
        for (let arrayIndex = arrayInput.length-1 ; arrayIndex>=0; arrayIndex--) {
            if (arrayInput[arrayIndex] === value){
                console.log();
                arrayResult.splice(arrayIndex,1);
                console.log(arrayResult);
                console.log();
                }
            }
        }
    return arrayResult;
};

// Do not edit below this line
module.exports = removeFromArray;
