function largest() {
   var args = Array.prototype.slice.call(arguments)
   var sorted = args.slice().sort(function(a, b) {
      return a - b
   })
   return sorted[sorted.length - 1]
}
function smallest() {
   var args = [].slice.call(arguments)
   return Math.min.apply(null, args)
}

console.log(largest(2, 0.1, -5, 100, 3))
console.log(smallest(2, 0.1, -5, 100, 3))

// node 6_largestSmallest.js