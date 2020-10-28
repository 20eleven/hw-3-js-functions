function stringExpansion(str) {
   var arr = []
   var newStr = []
   var num = 0
   var sym = ''
   for (var index = 0; index < str.length; index++) {
      var char = str[index]
      isNaN(Number(char)) ? arr.push(char) : arr.push(+char)
   }
   arr.map(function(item) {  
      if (typeof item === 'string') {
         sym = item
      }
      if (typeof item === 'number') {
         num = item
      }  
      var myRepeat = new Array(num + 1).join(sym)
      newStr.push(myRepeat)  
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