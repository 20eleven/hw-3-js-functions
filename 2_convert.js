function convert(obj) {
   var keysArr = Object.keys(obj)
   return keysArr.map(function(key) {
      var value = obj[key]
      return key.split().concat(value)
   })
}

console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}))

// node 2_convert.js