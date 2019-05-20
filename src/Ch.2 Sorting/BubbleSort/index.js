function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) [arr[j], arr[i]] = [arr[i], arr[j]]
    }
  }
  return arr
}

module.exports = bubbleSort
