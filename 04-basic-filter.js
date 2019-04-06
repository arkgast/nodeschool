function getShortMessage (messages) {
  const maxLen = 50
  return messages
    .filter(msgObj => msgObj.message.length < maxLen)
    .map(msgObj => msgObj.message)
}

module.exports = getShortMessage
