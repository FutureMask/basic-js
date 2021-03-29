const CustomError = require("../extensions/custom-error");

module.exports = function countCats(mas) {
 return mas.length > 0 ? mas.reduce((allCats, thisArr) => allCats + thisArr.reduce((currentA, item) => item === "^^" ? ++currentA : currentA, 0), 0) : 0;
 
  };
