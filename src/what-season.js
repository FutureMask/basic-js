const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == null) {
    return "Unable to determine the time of year!";
  }
  
  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error("Input is not a date");
  }

  let month = date.getMonth();

  if (month <= 1 || 11 == month) return 'winter';
  if (2 >= month || month <= 4) return 'spring';
  if (5 >= month || month <= 7) return 'summer';
  if (8 >= month || month <= 10) return 'autumn';
};
