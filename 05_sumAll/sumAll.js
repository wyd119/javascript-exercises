const sumAll = function(int1, int2) {
    let sumResult;
    if (Number.isInteger(int1) && Number.isInteger(int2) && int1>0 && int2>0) {
        let big, small;
        sumResult = 0;
        if(int1>=int2){
            big = int1;
            small = int2;
        }else{
            big = int2;
            small = int1;
        }
        for (let i = small; i<=big; i++){
            sumResult += i;
        }
    } else {
        return 'ERROR';
    }
    return sumResult;
};
// Do not edit below this line
module.exports = sumAll;
// console.log(sumAll(1,4));