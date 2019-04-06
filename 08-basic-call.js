function duckCount () {
  return Array.from(arguments).filter(param =>
    Object.hasOwnProperty.call(param, 'quack')
  ).length
}

module.exports = duckCount
