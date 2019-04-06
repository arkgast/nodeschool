function reduce (arr, fn, initial) {
  if (!arr.length) return initial
  const head = arr[0]
  const value = fn(initial, head)
  return reduce(arr.slice(1), fn, value)
}

module.exports = reduce
