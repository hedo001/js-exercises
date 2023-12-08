// var searchInsert = function (nums, target) {
//     let res = nums.indexOf(target);
//     if (res === -1) {
//         nums.push(target);
//         nums.sort((a, b) => a - b);
//         return nums.indexOf(target);
//     } else {
//         return res;
//     }
// };
// console.log(searchInsert([1, 3, 5, 6], 7));

var combinationSum2 = function (candidates = [], target) {
  let res = [];

  candidates.map((el, i) => {
    if (el === target) res.push([el]);
    if (target - el > 0) {
      if (candidates.includes(target - el)) {
        if (!res.includes([el, candidates[candidates.indexOf(target - el)]])) {
          res.push([el, candidates[candidates.indexOf(target - el)]]);
        }
      }
    }
  });
  console.log(res[0] == res[4]);
  return res;
};
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
