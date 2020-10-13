function splitAndMerge(str, sp) {
   return str.split(' ').map(function(wordItem) {
      return wordItem.split('').join(sp)
   }).join(' ')
}

console.log(splitAndMerge("My name is John", " "))
console.log(splitAndMerge("Hello World!", ","))

// node 1_splitAndMerge.js 