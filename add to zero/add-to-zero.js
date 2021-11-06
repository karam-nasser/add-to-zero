// Starting array

// let array = [1, 4, 11, 2, 37, -4]

// let value = "True"
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length; j++) {
//     if (i == j) {
//       if (array[i] + array[j] === 0) { 
//           value = "False" 
//       }
//     }
//   }
// }
// console.log(value)



// let array = [0, 21, 33, 6, 0, -9]

// let value = "False"
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length; j++) {
//     if (i == j) {
//       if (array[i] + array[j] === 0) { 
//           value = "True" 
//       }
//     }
//   }
// }
// console.log(value)

let array = [0, 1, 2, 3, 4, 5]

let value = "True"
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i == j) {
      if (array[i] + array[j] === 0) { 
          value = "False" 
      }
    }
  }
}
console.log(value)