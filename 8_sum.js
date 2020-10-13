function sum() {
   var args = Array.prototype.slice.call(arguments)
   var arrLength = args.length - 1
   if (arrLength === 0) {
      return args[arrLength]      
   } else {   
      return args[arrLength] + sum.apply(null, args.slice(0, arrLength))
   }
}

console.log(sum(1, 3, 5, 7))

// node 8_sum.js