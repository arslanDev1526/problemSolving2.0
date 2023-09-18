// (11) sort the Array  =====>

// ascending (increasing) order

// let arr = [1,3,5,7,9,7,5,4,3,2,4,6,7]

// let result = arr.sort((a,b)=>a-b);
// console.log(result);

// descending (decreasing)

// arr.sort((a,b)=>b-a); that will be changed

// (12) input: [1,[2,3,null,4],[null],5] =====>

// output: [1,2,3,4,5]

// let arr = [1, [2, 3, null, 4], [null], 5];

// const flatten = (arr) => {
//   let flatArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] !== null) flatArr.push(arr[i][j]);
//       }
//     } else {
//       if (arr[i] !== null) {
//         flatArr.push(arr[i]);
//       }
//     }
//   }

//   return flatArr;
// };

// console.log(flatten(arr))

// (13) find the longest word in string  ======>

// let str = "cjdhsdkfhf kusudyfuyse kueuifeg gu awuyqwaiuawg"
// let longestString = (str) => {
//   let words = str.split(" ");
//   let maxLength = 0;
//   let longestWord = "";

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > maxLength) {
//       maxLength = words[i].length;
//       longestWord = words[i];
//     }
//   }
//   console.log(maxLength);
//   console.log(longestWord);
// };

// longestString(str);

// (14) return the unique value

// let arr = [1, 2, 3, 4, 3, 9, 8, 9];

// let uniqueValue = (arr) => {
//   let newArr = [];
//   arr.sort();

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };

// console.log(uniqueValue(arr));

// without sorting

// let arr = [1, 2, 3, 4, 3, 9, 8, 9];

// let uniqueValues = [];

// for (let i = 0; i < arr.length; i++) {
//   let currentValue = arr[i];
//   if (!uniqueValues.includes(currentValue)) {
//     uniqueValues.push(currentValue);
//   }
// }

// console.log(uniqueValues);

// (15)                    ======>
// input => 'horse'
// output => "Horse, please"

// function backDoorPassword(word) {
//   let captlize = word.charAt(0).toUpperCase();
//   let remining = word.slice(1);
//   let combine = captlize + remining;

//   let result = combine + "," + " please";

//   return result;
// }

// console.log(backDoorPassword("horse"));

// (16) reverse the string   =====>

// let str = "arslan";

// let reverse = str.split("").reverse().join("");
// console.log(reverse);

// (17) reverse the words is the sentence ======>

// let sentence = "i am new here do you understand me?"

// function reverseWords(str) {
//     let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
//     return reverseWordArr.join(" ");
//   }

//   console.log(reverseWords(sentence));

//    (18)  how to check object is array or not =======>

// let data = { name: "arslan", age: "49", class: "unknown" };

// let arr = [ "arslan", true,"49", null, "unknown"]

// if(Array.isArray(arr)){
//     console.log("its array")
// } else {
//     console.log("its not  array")
// }


//  (19)   empty an arry     ========>

// let myArr = [1, 2, 3, 4, 5, 6];
// myArr.length = 0;
// myArr.splice(0, myArr.length);
// myArr = []

// while(myArr.length > 0){
//     myArr.pop();
// }

// console.log(myArr)



// (20) check a number is integer or not    ======>

// let num = "39.5";

// if (typeof num === "number") {
//   if (num % 1 === 0) {
//     console.log("its integer");
//   } else {
//     console.log("its not integer");
//   }
// } else {
//   console.log("its not a number");
// }

// if (num === Math.floor(num)) {
//   console.log("its a integer");
// } else {
//   console.log("its not a integer");
// }
