function transform(arr) {
   var funcArr = []
   for (let item = 0; item < arr.length; item++) {
      var newFunc = function() { 
        return arr[item]
      }
      funcArr.push(newFunc)
   }
   return funcArr
}

var baseArray = [10, 20, 30, 40, 50]
var newArray = transform(baseArray)
console.log(newArray[3]())
console.log(newArray[4]())

// node 7_transform.js