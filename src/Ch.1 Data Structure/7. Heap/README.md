# 1-7 堆積

## 重點摘錄
- 何謂堆積
    - 圖形的樹狀結構之一
    - 優先佇列（p.092）
    - 最小堆積
        - 父節點的值小於子節點
        - root 一定是所有節點的最小值
    - 最大堆積
        - 父節點的值大於子節點
        - root 一定是所有節點的最大值

- 儲存資料規則（以最小堆積為例）
    - 子節點必須比父節點（Father Node）大
    - 從最下層的節點開始加入資料

- 取出最小值都只需要 O(1)
- 重整的時間為 O(log n)
    - 執行時間與樹狀結構的高成等比
    - 追加數據同理

- 例子
    - 戴克斯特拉演算法（p.106）

![](https://i.imgur.com/MaHD80w.png)




## 參考文獻
- [30天學演算法和資料結構 - [資料結構] 堆積 (Heap)](https://ithelp.ithome.com.tw/articles/10206479)
- [[演算法] 堆積排序法(Heap Sort) by yehyeh](https://ithelp.ithome.com.tw/articles/10206479)
- [排序之堆積排序法 by marklin](https://ithelp.ithome.com.tw/articles/10206479)
- [樹狀結構](https://zh.wikipedia.org/wiki/树_(数据结构))
- [binary heap tree](http://alrightchiu.github.io/SecondRound/priority-queuebinary-heap.html)