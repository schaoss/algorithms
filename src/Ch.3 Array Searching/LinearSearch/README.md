# 3-2 二元搜尋

- 何謂二元搜尋
    - 先決條件：資料大小需先**依序**排好
    - 查詢正中央的數，將與搜尋的數比較
    - 剔除一半不需要的數，繼續重覆上步驟直到找到
    - 時間複雜度為**O(log n)**

- example
    ![](https://i.imgur.com/h1RvRIr.gif)

- 與線性搜尋比較
    - 使用二元搜尋時，每次都須先排序資料。因此資料有新增時，都需付出額外的重排代價。
    - 線性搜尋則不受此限制，只需將新資料放在陣列最後即可。

- 使用時機
    - 需頻繁新增資料：線性搜尋
    - 需頻繁搜尋資料：二元搜尋
    

## 參考文獻
- [二元搜索 wiki](https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%88%86%E6%90%9C%E7%B4%A2%E7%AE%97%E6%B3%95)
- [BINARY search with FLAMENCO dance](https://www.youtube.com/watch?v=iP897Z5Nerk)
- [[演算法] 二分搜尋法(Binary Search)](http://notepad.yehyeh.net/Content/Algorithm/Search/BinarySearch/BinarySearch.php)
- [尾遞迴](https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/236632/)