# 1-3 陣列

## 重點摘錄
- 何謂陣列
    - 該結構數據排成一直線（與列表相同）
    - arr[n] 裡的 n 代表其在陣列中的排行（索引） 

- 特性與優缺點
    - 優點
        - 方便存取
        - 因為儲存在連鎖領域中，所以能用索引算出記憶體位置，用常數 O(1) 的執行時間來存取
    - 缺點
        - 追加或刪除很費時
        - 追加數據、刪除數據，需 O(n) 的時間



### 列表與陣列比較
|      | 列表 | 陣列 |
| ---- | ---- | ---- |
| 存取 | 慢   | 快   |
| 追加 | 快   | 慢   |
| 刪除 | 快   | 慢   |



## 補充資料

### JavaScript 中的陣列
- JavaScript 中的「陣列」(Array)，其實是一種定義好的「物件」(Object)，而非資料結構中定義的陣列。
```javascript=
let a = []
let b = new Array()

console.log(typeof a)
console.log(typeof b)
// 'object'
```

- 現代的 JS 編譯器，大部分都會將內容型別相同的陣列分配成連續的記憶體；一旦陣列中塞入了不同型別的內容，將會回到舊的(Hash-Table)實作方法進行實作。考慮效能的話，撰寫時要注意！
- ES6 中新增了型別陣列，例如 `Int32Array`；V8 的實作中會分配連續的記憶體位置給它，也就是資料結構中的「陣列」。


## 參考文獻
- [陣列 wiki](https://zh.wikipedia.org/wiki/%E6%95%B0%E7%BB%84)
- [MDN - JavaScript 的資料型別與資料結構
 ](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Data_structures)
