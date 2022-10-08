// Functions running in parallel with other functions are called asynchronous
// setTimeout(function() { myFunction("I will learn async coding"); }, 3000);

// function myFunction(value) {
//   console.log()
// }

// Promise
// Async await



// Example 1
// const add2Numbers = (num1, num2, printNumber) => {
//     const sum2num = num1 + num2
//     printNumber(sum2num)
// }

// const printNumber = (num) => {
//     console.log(num)
// }

// const sumOf2Numbers = add2Numbers(1, 2, printNumber)


// Example 2
const callingApi = async () => {
    // 3 sec
    // Server api to get the user details
    return 5
}

console.log("first")

callingApi()
.then(data => console.log(data))

console.log("2nd place")

