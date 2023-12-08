// let arr = ["name", "level", "anna"];
// function Pali(arr = []) {
//   for (const el of arr) {
//     let key = "";
//     for (let i = el.length - 1; i >= 0; i--) {
//       key += el[i];
//     }
//     if (key === el) {
//       return el;
//     }
//   }
// }
// console.log(Pali(arr));
// function Number(str) {
//   let res = "";
//   let bin = "";
//   for (const el of str) {
//     if (+el) {
//       bin += el;
//     } else if (bin) {
//       res += bin + ",";
//       bin = "";
//     }
//   }
//   console.log(res.slice(0, res.length - 1));
// }
// Number("sa83l4l53sba");
// Words = ["ad", "bd", "aabb", "baa"];
// function Alphabet(arr = []) {
//   let res = arr.filter((el) => el.includes("ab") || el.includes("ba"));
//   console.log(res.length);
// }
// Alphabet(Words);
// let str = "dsvasb";
// // let res = [];
// function Findal(str) {
//   for (let i = 0; i < str.length; i++) {
//     for (let d = str.length - 1; d > i; d--) {
//       if (str[i] === str[d]) {
//         return str[d];
//       }
//     }
//   }
// }
// console.log(Findal(str));
// let nums = [3, 2, 3];
// var twoSum = function (nums = [], target) {
//   let res = [];
//   for (const d in nums) {
//     for (let i = nums.length - 1; i > d; i--) {
//       if (nums[d] + nums[i] === target) {
//         res.push(+d);
//         res.push(i);
//       }
//     }
//   }
//   return res;
// };
// console.log(twoSum(nums, 6));
// let l1 = [9, 9, 9, 9, 9, 9, 9];
// let l2 = [9, 9, 9, 9];
// var addTwoNumbers = function (l1 = [], l2 = []) {
//   let sum = +l1.join("") + +l2.join("");
//   sum = sum + "";
//   return sum
//     .split("")
//     .map((el) => +el)
//     .reverse();
// };
// console.log(addTwoNumbers(l1, l2));
// let str = "abcabcbb";
// var lengthOfLongestSubstring = function (s) {
//   for (const i in str) {
//     for (let d = i; d < str.length; d++) {
//       if (str[i] != str[d]) {
//         console.log(str[i]);
//       }
//     }
//   }
// };
// console.log(lengthOfLongestSubstring(str));
// var findMedianSortedArrays = function (nums1, nums2) {
//   let res = [...nums1, ...nums2].sort((a, b) => a - b);
//   return parseInt(res.length / 2) == res.length / 2
//     ? ((res[res.length / 2] + res[res.length / 2 - 1]) / 2).toFixed(4)
//     : res[parseInt(res.length / 2)].oFixed(3);
// };
// console.log(findMedianSortedArrays([1, 3], [2, 7]));
// var longestPalindrome = function (s = "") {
//     if (s.length == 1 || (s.length == 2 && s[0] != s[1])) {
//       return s[0];
//     } else if (s.length == 2 && s[0] == s[1]) {
//       return s;
//     } else {
//       let res = [];
//       for (const i in s) {
//         for (let d = s.length - 1; d > i; d--) {
//           if (s[i] == s[d]) {
//             res.push([s.slice(i, d + 1)]);
//           }
//         }
//         let arr = res.filter(
//           (el) => el[0] == el[0].split("").reverse().join("")
//         );
//         arr.sort((a, b) => b[0].length - a[0].length);
//         return arr.length ? arr[0][0] : s[0];
//       }
//     }
// };
// console.log(longestPalindrome("cbbd"));
// var isMatch = function (s, p = "") {
//   if (!p.includes("*", ".")) {
//     return s == p;
//   }else{
//   }
// };
// console.log(isMatch("ab", ".*"));
// console.log(
//   [["ihi"], ["by"]].filter((el) => el[0] == el[0].split("").reverse().join(""))
// );
// const number = 10;
// let n1 = 0,
//   n2 = 1,
//   nextTerm;

// console.log("Fibonacci Series:");

// for (let i = 1; i <= number; i++) {
//   console.log(n1 < 10 ? n1 : "");
//   nextTerm = n1 + n2;
//   n1 = n2;
//   n2 = nextTerm;
// }
// let str = "mam";
// function Palidrome(str = "") {
//   return str.split("").reverse().join("") == str;
// }
// console.log(Palidrome(str));

// function Fibonacci(num = 10) {
//   let a = 0;
//   let b = 1;
//   for (let i = 0; i < 10; i++) {
//     let k = a + b;
//     a = b;
//     b = k;
//     console.log(a);
//   }
// }
// Fibonacci();

// function Fizz(num = 15) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log("fizzbuzz");
//     } else if ((i % 3 == 0 && i % 5 != 0) || i == 3) {
//       console.log("fizz");
//     } else if ((i % 3 != 0 && i % 5 == 0) || i == 5) {
//       console.log("buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
// Fizz();
// var firstMissingPositive = function (arr) {
//   let res = arr.filter((el) => el > 0).sort((a, b) => a - b);
//   console.log(res);
// };
// firstMissingPositive([1, 2, 4]);

// function pRIME(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) return false;
//   }
//   return true;
// }
// console.log(pRIME(4));

// let arr = [1, 4, 656, 7];
// console.log(Math.max(...arr));

// function Add(num1, num2) {
//   return num1 + num2;
// }
// console.log(Add(2, 4));

// console.log([{ al: 1 }] == [{ al: 1 }]);
// console.log(-3 * 0===0);

// var twoSum = function (nums, target) {
//     let res = [];
//     for (const i in nums) {
//         for (let d = nums.length - 1; d > i; d--) {
//         if (nums[i] + nums[d] === target) {
//             res.push(+i);
//             res.push(d);
//         }
//         }
//     }
//     return res;
// };
// console.log(twoSum([2, 7, 11, 15], 9));
