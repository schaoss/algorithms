function quickSort(arr) {
  const [p, ...ary] = arr
  if (!p) return []
  if (!ary || !ary.length) return [p]

  const left = []
  const right = []
  for (let i = 0; i < ary.length; i++) {
    if (ary[i] < p) left.push(ary[i])
    else right.push(ary[i])
  }
  return [...quickSort(left), p, ...quickSort(right)]
}

module.exports = quickSort
