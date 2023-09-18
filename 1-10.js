// (1)  count the duplicate in array ======>

// let arr = [1, 2, 3, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5];

// let countDuplicate = (arr) => {
//   let count = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (count[arr[i]]) {
//       count[arr[i]]++;
//     } else {
//       count[arr[i]] = 1;
//     }
//   }

//   return count;
// };
// console.log("countDuplicate", countDuplicate(arr));

// with forEach loop

// const arr = ['one', 'one', 'one', 'two', 'two', 'three'];

// const count = {};

// arr.forEach(element => {
//   count[element] = (count[element] || 0) + 1;
// });

//   {one: 3, two: 2, three: 1}
// console.log(count);


// (2) fint the sum of array     ======>

// let arr = [1,2,3,4,5,6,7,8,9,10,11,11,11,11,11];

// let sumOfArray = (arr) => {
//     let count = 0;
// for(let i = 0; i < arr.length; i++){
//      count = count + arr[i];
// }

// return count;
// }

// console.log(sumOfArray(arr));

// with reduce

// let reduced = arr.reduce((acc,val) => acc + val,0);
// console.log(reduced);


// (3) find the multiple upto a limit  ======>

// const findMultipile = (num,limit) => { 
//     let multipipe = [];
//     for(let i = 1; i < limit; i++) {
//         if(i % num === 0){ 
//             multipipe.push(i);
//         }
// }
// return multipipe;
// }
// console.log(findMultipile(2,100))


// (4) remove the duplicate from the array   ======>

// let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5]
// let removeDuplicate = (arr) => { 
// let uniququeItems = [];
// for(let i = 0; i < arr.length; i++){ 
//     if(uniququeItems.indexOf(arr[i]) === -1) { 
//         uniququeItems.push(arr[i]); 
//     }
// }
// return uniququeItems
// }
// console.log(removeDuplicate(arr))


// from set

// let array = [1,2,3,4,5,5,4,3,2,9,0]
// let removedArr = new Set(array);
// // console.log(removedArr);
// let convertToArr = Array.from(removedArr);
// console.log(convertToArr);


// (5)  shuffle the array ======>

// const shuffleArray = (array) => { 
//     for(let i = array.length - 1; i >= 0; i--){ 
//         const randomIndex = Math.floor(Math.random() * (i + 1));
//         [array[i], array[randomIndex]] = [array[randomIndex], array[i]]
//     }
//     return array
// }

// console.log(shuffleArray([1,1,2,2,3,3,4,4,5,5]),"here")



//  (6) arrange the array in ascending order by loop ======>

// let arry = [2, 4, 6, 8, 2];

// for (let i = 0; i < arry.length; i++) {
//   for (let j = i + 1; j < arry.length; j++) {
//     if (arry[i] > arry[j]) {
//       const temp = arry[i];
//       arry[i] = arry[j];
//       arry[j] = temp;
//     }
//   }
// }

// via single loop

// for (let i = 0; i < arry.length; i++) {
//   if (arry[i] > arry[i + 1]) {
//     const result = arry[i];
//     arry[i] = arry[i + 1];
//     arry[i + 1] = result;

//     i = -1;
//   }
// }
// console.log(arry);



//  (7)  check the given numer is even or odd  =====>

// let eventOddChecker = (item) => {
//   if (item % 2 == 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// };

// console.log(eventOddChecker(1.5));


//  (8) count the Number of vowels in str  =====>

// with built in functionality

// let str = "arslan";

// let vowelsCount = (str) => {
//   let vowels = ["a", "i", "o", "u", "s"];
//   let count = 0;
//   let arr = str.split("");

//   for (let i = 0; i < arr.length; i++) {
//     if (vowels.includes(arr[i])) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(vowelsCount("arslan"));

// with nested loops

// let vowelCountLoop = (str) => {
//   let vowel = ["a", "i", "o", "u", "s"];
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < vowel.length; j++) {
//       if (str[i] == vowel[j]) {
//         count++;
//       }
//     }
//   }

//   return count;
// };

// console.log(vowelCountLoop("arslan"));



// (9) the first letter must be capital letter of str  ======>

// function frontDoorPassword(word) {
//   let lowercase = word.toLowerCase().slice(1);
//   let uppercase = word.charAt(0).toUpperCase();
//   let result = uppercase + lowercase;
//   return result;
// }
// console.log(frontDoorPassword("ARSLAN"));

// let str = "arslan";

// let finalFinal = str.toLowerCase().charAt(0).toUpperCase() + str.toLowerCase().slice(1);

// console.log(finalFinal);


// (10)  remove the last letter in sentence   ======>

// let str = "you satnd high   ";
// let trimmed = str.trim();

// let sep = trimmed.split("");

// let lastLetter = sep[sep.length - 1];

// console.log(lastLetter);


