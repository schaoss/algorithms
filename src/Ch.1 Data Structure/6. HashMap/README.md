# 1-6 雜湊表

## 重點摘錄
- 何謂雜湊表
    - 數據為成對的「鍵」(key)和「值」(value)
    - 解決線性搜尋問題（數據數量增加，代價隨之越大）

![](https://i.imgur.com/FOWicCg.jpg)



### 雜湊函數（p.128）
- 輸入字串，輸出數字的函數
- 通常用 [16 進位](https://zh.wikipedia.org/wiki/%E5%8D%81%E5%85%AD%E8%BF%9B%E5%88%B6) 來表示
- 特徵
    - 輸出的雜湊碼的數據長度不變
    - 輸入相同的值必定會產生相同的輸出值
    - 輸入類似的數據，不代表會產生類似的雜湊碼
    - 輸入不同的數據，可能產生相同的雜湊碼（雜湊碰撞）
    - 從雜湊碼推出原始數據是不可能的
- 代表性演算法
    - [MD5](https://zh.wikipedia.org/wiki/MD5)
    - [SHA-1](https://zh.wikipedia.org/wiki/SHA-1)
    - [SHA-2](https://zh.wikipedia.org/wiki/SHA-2)



### 碰撞
雜湊函數必定將不同的鍵對應至不同的陣列儲存槽。但事實上，還是有可能發生同一個鍵對應到相同的陣列儲存槽情況。

- 產生碰撞時，使用連結串列（p.022）
- 如果碰撞次數越多，效能越不好



### 發生碰撞時的處理方法
- 鏈結法（chaining）
- 開放定址法（open addressing）



## 補充資料

### JavaScript 中的雜湊表
- [Object](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Data_structures#Objects)（Key 必須為 String）
- ES6 新增物件 [Set](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Set)、[Map](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Map)、[WeakSet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)、[WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)



## 參考文獻
- [雜湊表](https://zh.wikipedia.org/wiki/%E5%93%88%E5%B8%8C%E8%A1%A8)
- [雜湊表 by Carlos-Studio](https://carlos-studio.com/2018/01/21/%E6%BC%94%E7%AE%97%E6%B3%95-%E9%9B%9C%E6%B9%8A%E8%A1%A8hash-table/)
- [進位轉換](https://www.convertworld.com/zh-hant/numerals/hexadecimal.html)
- [加密和雜湊有什麼不一樣？](https://blog.m157q.tw/posts/2017/12/25/differences-between-encryption-and-hashing/)
