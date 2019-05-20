const binarySearch = require('./index')

const arr = [6, 1, 5, 3, 4, 8, 7, 2]
const target = 8
test('binarySearch', () => {
  expect(binarySearch(arr, target)).toBe(5)
})
