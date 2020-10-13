function wordReverse(str) {
   return str.split(' ').map(function(wordItem) {
      return wordItem.split('').reverse().join('')
   }).join(' ')
}

console.log(wordReverse(" A fun little challenge! "))

// node 4_wordReverse.js