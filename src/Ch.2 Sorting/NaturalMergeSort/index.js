// 自然合併排序 - Natural Merge Sort
function naturalMergeSort(arr) {
  let resArr = cleanData(arr)
  while (resArr.length > 1) {
    const tmp = []
    for (let i = 0; i < resArr.length; ) {
      tmp.push(merge(resArr[i++], resArr[i++]))
    }
    resArr = tmp
  }
  return resArr[0]

  // 資料整理
  function cleanData(arr) {
    let flag = 0
    return arr.reduce((acc, c) => {
      if (!acc.length) return [[c]]
      if (!flag) {
        if (c > acc[acc.length - 1][0]) flag = 1
        else flag = -1
      }
      if (flag === 1 && c >= acc[acc.length - 1][acc[acc.length - 1].length - 1]) {
        acc[acc.length - 1].push(c)
      } else if (flag === -1 && c <= acc[acc.length - 1][0]) {
        acc[acc.length - 1].unshift(c)
      } else {
        acc.push([c])
        flag = 0
      }
      return acc
    }, [])
  }

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

module.exports = naturalMergeSort
