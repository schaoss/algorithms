function heapSort(arr) {
  const res = []
  while (arr.length) {
    res.unshift(heap(arr).shift())
  }
  return res

  // 最大堆積
  function heap(ary) {
    for (let i = 0; i < ary.length; i++) {
      check(i)
    }
    return ary

    function check(i) {
      let p = ~~((i + 1) / 2) - 1 // 父節點
      if (ary[i] > ary[p]) {
        ;[ary[i], ary[p]] = [ary[p], ary[i]]
        check(p)
      }
    }
  }
}

module.exports = heapSort
