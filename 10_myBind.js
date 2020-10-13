Function.prototype.myBind = function(context) {
   var bindListOfArgs = Array.prototype.slice.call(arguments, 1)
   var unicTemporaryId = Date.now().toString() + Math.random()
   context[unicTemporaryId] = this
   return function() {
      var funcListOfArgs = Array.prototype.slice.call(arguments) 
      var result = context[unicTemporaryId].apply(context, bindListOfArgs.concat(funcListOfArgs))
      delete context[unicTemporaryId]
      return result
   }
}

function addPropToNumber(number) { return this.prop + number }
var bound = addPropToNumber.myBind({ prop: 9 }) 
console.log(bound(1))

// node 10_myBind.js 