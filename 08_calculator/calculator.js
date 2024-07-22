const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arrIn) {
	return arrIn.reduce((accuItems,item)=>{
    return accuItems+item;
  },0)
};

const multiply = function(arrIn) {
  return arrIn.reduce((accuItems, item)=>{
    return accuItems*item;
  },1)
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(intX) {
  let result = 1;
	for(let i = 1; i<=intX; i++ ){
    result = result*i; 
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
