const heapSort = require('./index')

const arr = [6, 1, 5, 3, 4, 8, 7, 2]
test('heapSort', () => {
  expect(heapSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
})
