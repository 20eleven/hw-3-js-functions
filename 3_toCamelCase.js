function toCamelCase(str) {
   return str.split(/[\\\-]|[\\\_]/).map(function(wordItem) {
      if (!wordItem || str.charAt(0) == wordItem[0]) {
         return wordItem
      } else {
         return wordItem[0].toUpperCase() + wordItem.slice(1)
      }        
   }).join('')
}

console.log(toCamelCase("the-stealth-warrior"))
console.log(toCamelCase("The_Stealth_Warrior"))

// node 3_toCamelCase.js