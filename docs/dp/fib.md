## 1. [斐波那契数](https://leetcode.cn/problems/fibonacci-number/description/)

### 题目描述
> 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
> F(0) = 0，F(1) = 1
F(n) = F(n - 1) + F(n - 2)，其中 n > 1
> 给定 n ，请计算 F(n) 。

>输入：n = 2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1

> 输入：n = 3
输出：2
解释：F(3) = F(2) + F(1) = 1 + 1 = 2

> 输入：n = 4
输出：3
解释：F(4) = F(3) + F(2) = 2 + 1 = 3

### 思路
1. dp数组，定义为 dp[n],意思为给定n，计算F(n)
2. 递推公式 F(n)=F(n-1) + F(n-2)
3. 初始化 dp[0]=0,dp[1]=1
4. 遍历顺序 for(let i = 2;i<=n;i++)

### 具体代码实现
```js
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n<=1){
        return n;
    }
    const dp = new Array(n+1).fill(0);
    dp[0]=0;
    dp[1]=1;
    for(let i = 2;i<=n;i++){
        dp[i]=dp[i-1]+dp[i-2]
    }
    return dp[n]
};
```