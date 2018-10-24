// Returns a local (or UTC) timestamp in YYYYMMDD-HH-MM-SS format

const timeStamp = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = (now.getMonth() + 1) < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1
  const date = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
  const hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours()
  const minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()
  const seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()
  return `${year}${month}${date}-${hours}-${minutes}-${seconds}`
}

const timeStampUTC = () => {
  const now = new Date()
  const year = now.getUTCFullYear()
  const month = (now.getUTCMonth() + 1) < 10 ? '0' + (now.getUTCMonth() + 1) : now.getUTCMonth() + 1
  const date = now.getUTCDate() < 10 ? '0' + now.getUTCDate() : now.getUTCDate()
  const hours = now.getUTCHours() < 10 ? '0' + now.getUTCHours() : now.getUTCHours()
  const minutes = now.getUTCMinutes() < 10 ? '0' + now.getUTCMinutes() : now.getUTCMinutes()
  const seconds = now.getUTCSeconds() < 10 ? '0' + now.getUTCSeconds() : now.getUTCSeconds()
  return `${year}${month}${date}-${hours}-${minutes}-${seconds}`
}

module.exports = {
  timeStamp,
  timeStampUTC
}
