function transform(arr) {
   return arr.map(function (srcItem) {
      return function () {
         return srcItem
      }
   })
}

var baseArray = [10, 20, 30, 40, 50]
var newArray = transform(baseArray)
console.log(newArray[3]())
console.log(newArray[4]())

// node 7_transform.js