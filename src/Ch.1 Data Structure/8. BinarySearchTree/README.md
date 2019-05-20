# 1-8 二元搜尋樹

## 重點摘錄
- 何謂二元搜尋樹
    - 圖形的樹狀結構之一

![](https://i.imgur.com/EiKeibG.png)


- 特性
    - 一個節點最多有兩個子節點
    - 所有節點上的數都會「大於」連結在其「左邊」的節點上的數
    - 所有節點上的數都會「小於」連結在其「右邊」的節點上的數
    - 往「左」沿樹狀結構找到最尾端，即是「最小節點」
    - 往「右」沿樹狀結構找到最尾端，即是「最大節點」

- 執行時間
    - 樹狀結構達到平衡時，比較的次數與樹狀結構的高度相同 O(log n)
    - 樹狀結構靠攏成縱向一直線的形狀，代價是 O(n)

### 樹狀結構不平衡時
- [平衡樹（self-balancing binary search tree）](https://zh.wikipedia.org/wiki/平衡树 ): 控制樹的高度維持在 O(log n) 的左右
- [B 樹（B-tree）](https://blog.niclin.tw/2018/06/18/%E4%BB%80%E9%BA%BC%E6%98%AF-b-tree-balance-tree/)：控制子節點的數量



### 陣列表示法
![](https://i.imgur.com/FG7MQ3q.png)
| 索引值 | 資料 |
| ------ | ---- |
| 1      | 5    |
| 2      | 4    |
| 3      | 6    |
| 4      | 2    |
| 5      |      |
| 6      |      |
| 7      | 8    |
| 8      | 1    |
| 9      | 3    |
| 10     |      |
| 11     |      |
| 12     |      |
| 13     |      |
| 14     | 7    |
| 15     | 9    |


### 串列表示法
![](https://i.imgur.com/ghpkHal.png)
|     | 左  | 資料 | 右  |
| --- | --- | ---- | --- |
| 1   | 2   | 5    | 3   |
| 2   | 4   | 4    | 0   |
| 3   | 0   | 6    | 5   |
| 4   | 6   | 2    | 7   |
| 5   | 8   | 8    | 9   |
| 6   | 0   | 1    | 0   |
| 7   | 0   | 3    | 0   |
| 8   | 0   | 7    | 0   |
| 9   | 0   | 9    | 0   |


## 參考文獻
- [二元樹](https://zh.wikipedia.org/wiki/二叉树)
- [演算法筆記 - Binary Search Tree](http://www.csie.ntnu.edu.tw/~u91029/Order.html#1)
- [Binary Search Tree by Chiu](http://alrightchiu.github.io/SecondRound/binary-search-tree-introjian-jie.html)
- [Red Black Tree by Chiu](http://alrightchiu.github.io/SecondRound/red-black-tree-introjian-jie.html)