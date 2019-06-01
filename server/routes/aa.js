// function a() {
//   return undefined
// }
// function b(n,m) {
//   console.log (n+m)
// }

// var g = b.bind(1)
// g(2,3)

// var c = a() && b()

// console.log(c)

// var d = [1,2,3]

// for(var i in d){
//   console.log(i)
// }

import React from 'react'

const Foo = () => <div>'aaa'</div>
console.log(typeof (<Foo/>))

