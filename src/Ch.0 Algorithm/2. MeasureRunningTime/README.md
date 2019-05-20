# 0-2 執行時間的量測方法

## 重點摘錄
- 如何評估演算法的效能
    - 演算法完整執行所需的時間：時間複雜度
    - 演算法完整執行所需的運算空間：空間複雜度
- 時間複雜度計算方式
    - 使用「步驟次數」來表示執行時間
    - 以選擇排序法為例，所需時間為 O(n^2)
    - O 為 order 的意思，代表「忽略重要項目之外的部分」
    - 我們稱一個演算法的時間複雜度是 O(n^2)，代表「該演算法在最糟情況下，所花費的執行步驟能控制在 n^2 的常數倍內」。


## 補充資料

### 各種時間複雜度表示法
- 上界：[Big-O(O)](https://zh.wikipedia.org/wiki/%E5%A4%A7O%E7%AC%A6%E5%8F%B7)
- 下界：[Big-Ω(Omega)](https://zh.wikipedia.org/wiki/%E5%A4%A7%CE%A9%E7%AC%A6%E5%8F%B7)
- 上界&下界：[Big-Θ(Theta)](https://zh.wikipedia.org/wiki/%E5%A4%A7%CE%98%E7%AC%A6%E5%8F%B7)

### 各種排序的時間複雜度與最快的排序能到多快？
- 排序演算法最快能到多快
    - 非線性：O(nlogn)，
    - 線性：O(n)
- 第二章提到的皆為非線性排序
- [線性排序法：Counting sort、Bucket sort、Radix sort](https://www.byvoid.com/zht/blog/sort-radix)
- [寫程式的基本功：排序演算法(Sorting Algorithm)](https://magiclen.org/sorting-algorithm/)
- [[演算法] 排序演算法(Sort Algorithm)](http://notepad.yehyeh.net/Content/Algorithm/Sort/Sort.php)
- [計數排序法(Counting Sort)，只需線性時間就能完成的超快排序法](https://magiclen.org/counting-sort/)
    - 限制：只能用來排序已知數值範圍的序列
- [15 Sorting Algorithms in 6 Minutes](https://www.youtube.com/watch?v=kPRA0W1kECg)
- [聊聊前端排序的那些事](https://efe.baidu.com/blog/talk-about-sort-in-front-end/)
    - 在V8 v7.0 / Chrome 70後算法已經是穩定的 [補充連結](https://stackoverflow.com/questions/1427608/fast-stable-sorting-algorithm-implementation-in-javascript)


### 空間複雜度
演算法隨著「輸入大小」不同，需要多少儲存空間來運算的效能依據。

例如下面這個函式，不管程式跑了幾遍，都不會影響使用的變數數量：

```javascript=
function(n){
    for(let i=0; i<n; i++){
        console.log(i)
    }
}
```

故該函式的空間複雜度記做 O(1)。

但下面這個函式，會隨著丟進去的數字而影響變數的量，例如：

```javascript=
function(int n){
    let c[n]
    for(let i=0; i<n; i++){
        c[i] = i
    }
}
```

丟進去 n，就會產生 n 個變數，故該函式空間複雜度為 O(n)。

- 與時間複雜度相似，以O(1)、O(n)等來表示佔用儲存空間大小的一個量度
- 以選擇排序法為例，所佔用空間為O(1)
- 如同時間複雜度忽略係數大小，空間複雜度忽略本身算法所宣告變量空間，而在乎臨時占用存儲空間大小
- 用時間換取空間或是用空間換取時間需要依情境而定
- [附上定義](https://wiki.mbalib.com/zh-tw/%E7%A9%BA%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6)
    
    
### 穩定度
- 相同鍵值的資料，排序後順序和排序前一樣稱為穩定
- 平常使用的Array.sort為引擎內寫好的算法(不同瀏覽器可能不一致)

### 其他延伸閱讀
- [Big O Notation & Time Complexity](https://pjchender.blogspot.com/2017/09/big-o-notation-time-complexity.html) (中文的ㄎㄎ)
- [[資料結構] 演算法評估與資料型別](http://notepad.yehyeh.net/Content/DS/CH01/3.php)
- [哈佛大學CS50](https://www.youtube.com/channel/UCcabW7890RKJzL968QWEykA)
