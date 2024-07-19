const reverseString = function(stringInput) {
    let stringInputArray = stringInput.split('').reverse();
    let reverseStringResult = stringInputArray.join('');
    // console.log(reverseStringResult);

    return reverseStringResult;
};

// Do not edit below this line
module.exports = reverseString;

reverseString('hello');