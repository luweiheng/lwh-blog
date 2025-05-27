## 1. [不同路径2](https://leetcode.cn/problems/unique-paths-ii/description/

### 题目描述

> 给定一个 m x n 的整数数组 grid。一个机器人初始位于 左上角（即 grid[0][0]）。机器人尝试移动到 右下角（即 grid[m - 1][n - 1]）。机器人每次只能向下或者向右移动一步。
网格中的障碍物和空位置分别用 1 和 0 来表示。机器人的移动路径中不能包含 任何 有障碍物的方格。
返回机器人能够到达右下角的不同路径数量。




> 输入：obstacleGrid = 
    [
        [0,0,0],
        [0,1,0],
        [0,0,0]
    ]
输出：2
解释：3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
> 1. 向右 -> 向右 -> 向下 -> 向下
> 2. 向下 -> 向下 -> 向右 -> 向右


### 问题分析
1. 每次只能向右或者想下移动，那么到达终点的前一步必定为终点的上面一格，或者左边一格。
2. 这需要注意的是遇到障碍物需要跳过，即obstacleGrid[m][n] === 1 的话需要跳过。

### 思路
1. 先根据obstacleGrid获取有多少行与多少列。
2. 定义一个二维数组 dp[rowIndex][colunmIndex]来表示到达rowIndex行，colunmIndex列的所以路径和。
3. 递推公式：`dp[rowIndex][colunmIndex] = dp[rowIndex][colunmIndex-1] + dp[rowIndex-1][colunmIndex]`
4. dp数组初始化：第一行与第一列在没有遇到障碍物之前所有的格子有只有1条路线，遇到障碍物之后只有0条路线。
5. 所以第一行的 dp[0][1~n]都应该初始化为1。第一列 dp[1-n][0]也应该初始化为1。
6. 所以可以从[1,1]位置开始遍历

### 具体代码实现
```js
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    //行
    const m = obstacleGrid.length;
    //列
    const n = obstacleGrid[0].length;

    //边界条件，起点或者终点是障碍物的话 直接return 0
    if(obstacleGrid[0][0] === 1 || obstacleGrid[m-1][n-1] === 1){
        return 0
    }

    const dp = new Array(m).fill(0).map(()=>new Array(n).fill(0));
    //初始化第一行
    for(let i = 0 ; i < n; i++){
        const item = obstacleGrid[0][i];
        if(item === 1){
            break;
        }
        dp[0][i] = 1;
    }
    //初始化第一列
     for(let i = 0 ; i < m; i++){
        const item = obstacleGrid[i][0];
        if(item === 1){
            break;
        }
        dp[i][0] = 1;
    }

    for(let i = 1 ; i < m ; i++){
        for(let j = 1; j<n;j++){
            if(obstacleGrid[i][j] === 1){
                continue;
            }
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }

    return dp[m-1][n-1]

};
```

