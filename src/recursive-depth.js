const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;
    arr.forEach(elem =>{
    if(Array.isArray(elem)){
       const depth =this.calculateDepth(arr)+1
       if (depth > maxDepth){
         maxDepth = depth}
    }
    })
    return maxDepth 
  }
};
      
    
