# 1-2 列表

## 重點摘錄
- 何謂列表
    - 該結構數據排成一直線
    - 線性搜尋（可參考 p.082）

- 特性與優缺點
    - 優點
        - 便於追加或刪除
        - 不需事先知道資料型別大小，充分利用動態記憶體管理
        - 以常數時間插入／刪除，不需重新配置記憶體
        - 不同的串列若有資料相同時，可以共享節點或資料，節省空間
        - 新增和刪除花費時間 O(1)
    - 缺點
        - 存取數據費時
        - 空間開銷大：每個元素需儲存額外的指標空間
        - 較差的 CPU 快取：不連續存取的特性
        - 不允許隨機存取：搜尋特定索引下的節點仍需線性時間
        - 存取時間花費時間 O(n)
      
### 單向連結串列
- 連結串列中最簡單的一種
    - 只可向一個方向遍歷
    
- 一個資訊域和一個指標域
    - 第一個部分儲存或顯示關於節點的資訊
    - 第二個部分儲存下一個節點的位址

- 連結指向下一個節點，而最後一個節點則指向一個空值

![](https://i.imgur.com/EhiD8AB.png)



### 雙向連結串列
- 每個節點有兩個連接：一個指向前一個節點，而另一個指向下一個節點
- 列表沒有前後之分，能從另一端來存取
- 追加或刪除數據時，需變更方向的指標數也變多

![](https://i.imgur.com/4AVzyUO.png)



### 循環連結串列
- 第一個節點之前就是最後一個節點
- 靈活處理新加入的節點

![](https://i.imgur.com/C1YrF3V.png)



## 參考文獻
- [列表 wiki](https://zh.wikipedia.org/wiki/%E9%93%BE%E8%A1%A8)
- [列表 rust-algo.club](https://rust-algo.club/collections/linked_list/)
- [列表 by emn178](http://emn178.pixnet.net/blog/post/93557502-%E9%80%A3%E7%B5%90%E4%B8%B2%E5%88%97%28linked-list%29)