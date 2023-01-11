var merge = function (intervals) {
  //Merge Interval
  let arr = [];

  //sorting using first element
  intervals.sort((a, b) => a[0] - b[0]);

  let curr = intervals[0];
  for (let i in intervals) {
    //if the second element in curr is greater than the first element of i
    if (curr[1] >= intervals[i][0])
      curr[1] = Math.max(curr[1], intervals[i][1]);
    else {
      //push in array and change the curr
      arr.push(curr);
      curr = intervals[i];
    }
  }
  arr.push(curr);
  return arr;
};
var insert = (intervals, newInterval) => {
  intervals = [...intervals, newInterval];
  return merge(intervals);
};
console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);
