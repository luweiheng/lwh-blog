## 1. [不同路径](https://leetcode.cn/problems/unique-paths/description/)

### 题目描述

> 一个机器人位于一个 m x n 网格(就是m行，n列)的左上角 （起始点在下图中标记为 “Start” ）。
机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
问总共有多少条不同的路径？



> 输入：m = 3, n = 7
输出：28

> 输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下

3行两列,用二维数组表示即为
```
[
   [1,2],
   [3,4],
   [5,6]
]
```

### 问题分析

1. 每次只能向右或者想下移动，那么到达终点的前一步必定为终点的上面一格，或者左边一格。

### 思路
1. 定义一个二维数组 dp[rowIndex][colunmIndex]来表示到达rowIndex行，colunmIndex列的所以路径和。
2. 递推公式：`dp[rowIndex][colunmIndex] = dp[rowIndex][colunmIndex-1] + dp[rowIndex-1][colunmIndex]`
3. dp数组初始化：第一行的任何位置永远只会有一条路线通往，就是不断往右。第一列的任何位置永远也只会有一条路线通往，就是不断往下。
4. 所以第一行的 dp[0][1~n]都应该初始化为1。第一列 dp[1-n][0]也应该初始化为1。
5. 所以可以从[1,1]位置开始遍历

### 具体代码实现
```js
var uniquePaths = function(m, n) {
  if(m === 1 || n === 1){
    return 1;
  }
  const dp = new Array(m).fill(0).map(()=>new Array(n).fill(0));
  
  for(let i = 0; i < n; i++ ){
     dp[0][i] = 1
  }  
  for(let i = 0 ; i < m ; i++ ){
    dp[i][0] = 1
  }
  for(let rowIndex = 1; rowIndex < m ; rowIndex++){
     for(let columnIndex = 1; columnIndex < n; columnIndex++){
          dp[rowIndex][columnIndex] = dp[rowIndex-1][columnIndex] + dp[rowIndex][columnIndex-1]
     }
  } 
  return dp[m-1][n-1]
};
```

