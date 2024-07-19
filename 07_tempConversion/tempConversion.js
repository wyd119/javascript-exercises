const convertToCelsius = function(temp) {
  let resultRaw = (temp-32)*5/9;
  return parseFloat(resultRaw.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let resultRaw = temp*9/5+32;
  return parseFloat(resultRaw.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// convertToCelsius(32);
