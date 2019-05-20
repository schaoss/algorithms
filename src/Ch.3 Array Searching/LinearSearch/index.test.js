const linearSearch = require('./index')

const arr = [6, 1, 5, 3, 4, 8, 7, 2]
const target = 8
test('linearSearch', () => {
  expect(linearSearch(arr, target)).toBe(5)
})
