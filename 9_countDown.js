function countDown(num) {  
   var current = num
   var timer = setInterval(function func() {
      console.log(current)
      if (current == 0) {
         clearInterval(timer)
      } else {
         current-- 
      }
   }, 1000)
}

countDown(3)

// node 9_countDown.js