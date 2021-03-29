const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1, res = []) {
    res.push(depth);
    arr.forEach((item) => {
      if (Array.isArray(item))
        this.calculateDepth(item, depth + 1, res);
    });
    return Math.max(...res);
  }
};