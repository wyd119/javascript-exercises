const fibonacci = function(indexInput) {
    let index = parseInt(indexInput);
    if(index<0){
        return 'OOPS';
    }else if(index===0){
        return 0;
    }else if(index<=2){
        return 1;
    }
    let previousNum = 1;
    let lastNum = 1;
    while(index>2){
        let newItem = previousNum+lastNum;
        previousNum = lastNum;
        lastNum = newItem;
        index--;
    }
    return lastNum;
};



// console.log(fibonacci(4));

// 1,1,2,3,5,8....

// Do not edit below this line
module.exports = fibonacci;
