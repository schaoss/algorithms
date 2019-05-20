function mergeSort(arr) {
  while (arr.length > 1) {
    const tmp = []
    for (let i = 0; i < arr.length; ) {
      tmp.push(merge(arr[i++], arr[i++]))
    }
    arr = tmp
  }
  return arr[0]

  // 陣列合併
  function merge(arr1, arr2 = []) {
    if (!Array.isArray(arr1)) arr1 = [arr1]
    if (!Array.isArray(arr2)) arr2 = [arr2]
    const res = []
    const limit = arr1.length + arr2.length
    while (res.length < limit) {
      if (!arr1.length) res.push(...arr2)
      else if (!arr2.length) res.push(...arr1)
      else if (arr1[0] < arr2[0]) res.push(arr1.shift())
      else res.push(arr2.shift())
    }
    return res
  }
}

module.exports = mergeSort
