//  (21)  mul(2)(3)(4)    =====>

// function mul (a) {
//     return function (b) {
//         return function (c) {
//             return a * b * c;
//         }
//     }
// }

// console.log(mul(2)(3)(4));

// (22)  fizz buzz =====>

// for (let i = 1; i < 100; i++) {
//   console.log(i)

//   if (i % 3 === 0) {
//     console.log("fizz");
//   }
//   if (i % 5 === 0) {
//     console.log("buxx");
//   }

//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fixxbuxx");
//   }
// }

// (23)  anagrams of each other   =====>

// let firtsWord = "ARSLAN"
// let secondWord = "nalsra"

// const isAnagram = (first, second) => {
//     a = first.toLowerCase();
//     b = second.toLowerCase();

//     a = a.split("").sort().join("");
//     b = b.split("").sort().join("");

//     return a === b;
// }

// console.log(isAnagram(firtsWord, secondWord))

//  (24)  Palindrome Checker  =====>

// Create a function that checks if a given string is a palindrome (reads the same forwards and backwards).
// Example: Input: "racecar", Output: true

// let str = "level";

// let palindromeChecker = (str) => {
//   let reverseStr = str.split("").reverse().join("");

//   if (reverseStr === str) {
//     return true;
//   } else {
//     return false;
//   }

// };
// console.log(palindromeChecker(str));

//  (25)  Find Missing Number  =====>

// function missing(arr) {
//   var x = 0;
//   for (var i = 0; i < arr.length; i++) {
//     x = x + 1;
//     if (arr[i] !== x) {
//       return x;
//     }
//   }
// }

// console.log(missing([2, 45]));

// const missingNum = (arr) => {

//     let missingArray = [];
// let minNum =    Math.min(...arr)
// let maxNum =    Math.max(...arr)

// for(let i = minNum; i < maxNum; i++) {

//     if(arr.indexOf(i) < 0) {
//         missingArray.push(i)
//      }}

//      return missingArray

// }

// console.log(missingNum([-2,1, 2, 4, 5,5, 6,14]))

// (26)  Fibonacci Sequence  ======>

// const getFibonacci = (num) => {
//     const sequence = [];

//     let a = 0;
//     let b = 1;
//     sequence.push(a);
//     sequence.push(b);

//     for(let i = 2; i < num; i++) {

//         const nextFibonacci = a + b;
//         sequence.push(nextFibonacci);
//         a = b;
//         b = nextFibonacci;
//     }
//      return sequence

// }

// console.log(getFibonacci(10))

// just copied from net

// function fibonacci(num) {
//     // x is representing the first term,
//     // y is representing the second term, and
//     // z is representing the sum of x and y.
//     var x = 0;
//     var y = 1;
//     var z;
//     var i = 2;
//     while (i < num) {
//       z = x + y;
//       x = y;
//       y = z;

//       i = i + 1;
//     }
//     return y;
//   }

//   var num = 9;
//   answer = fibonacci(num);

//   console.log("The 9th term of the Fibonacci series is: ", answer);

// (27) Nested Array ==> flat   =======>

// methode => 1

// const flatten = (input) => {

//     let output = input.flat(2);

//     return output
// }

// console.log(flatten( [1, [2, 3], [4, [5, 6]]]));

// const flatten = (input) => {

// for (let i = 0; i < input; i++){
//     console.log(i)
// }

// }

// console.log(flatten( [1, [2, 3], [4, [5, 6]]]));

// methode => 2

// let arr = [1, [2, 3], [4, [5, 6]]]
// let flatArray = [].concat(...arr);

// methode => 3 (recrustion)

// const flatten = (arr) => {
//     let flatArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         // If the current element is an array, recursively flatten it
//         flatArr = flatArr.concat(flatten(arr[i]));
//       } else {
//         flatArr.push(arr[i]);
//       }
//     }
//     return flatArr;
//   };

//   const arr = [1, [2, 3], [4, [5,[1,2,122,23 ,[32]], 6]]];
//   console.log(flatten(arr));

// (28) Two sum    =====>

// naive way

// const findSum = (arr, S) => {
//   let sums = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === S) {
//         sums.push(arr[i], arr[j]);
//       }
//     }
//   }
//   return sums;
// };

// console.log(findSum([1, 2, 3, 4, 5], 11));

// best way

// var twoSum = function(nums, target) {
//   const hashmap = {};
//   for (let i = 0; i < nums.length; i++) {
//     const diff = target - nums[i];

//     // If the difference is in the hashmap, return the indices.
//     if (diff in hashmap) { // or, hashmap[diff] !== undefined
//       return [hashmap[diff], i];
//     }

//     // Otherwise, add the current number to the hashmap.
//     hashmap[nums[i]] = i;
//   }

//   return [];
// };

// (29) title Case      ======>

// const titleCase = (sentence) => {
//   let words = sentence.split(" ");

//   const titleCase = words.map((word) => {
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   });

//   const completeSentence = titleCase.join(" ");

//   return completeSentence;
// };

// console.log(titleCase("hello woLKJld"));
