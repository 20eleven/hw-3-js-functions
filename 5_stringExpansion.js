function stringExpansion(str) {
   var arr = []
   var newStr = []
   var num = 0
   var sym = ''
   for (var char of str) {
      isNaN(Number(char)) ? arr.push(char) : arr.push(+ char)      
   }   
   arr.map(function(item) {  
      if (typeof item === 'string') {
         sym = item
      }
      if (typeof item === 'number') {
         num = item
      }  
      newStr.push(sym.repeat(num))   
      if (!num) {
         newStr.push(sym)
      }
      sym = ''  
   })
   return newStr.join('')
}

console.log(stringExpansion('3D2a5d2f'))
console.log(stringExpansion('3d332f2a'))
console.log(stringExpansion('abcde'))

// node 5_stringExpansion.js