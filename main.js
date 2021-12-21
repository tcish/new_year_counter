const daysEl = document.querySelector("#days")
const hoursEl = document.querySelector("#hours")
const minsEl = document.querySelector("#mins")
const secsEl = document.querySelector("#secs")

function countDown() {
  const currentDate = new Date()
  const initialDate = `1 jan ${currentDate.getFullYear() + 1}`
  const formatDate = new Date(initialDate)

  const totalSeconds = (formatDate - currentDate) / 1000

  // 1 hour = 3600 seconds
  const days = Math.floor(totalSeconds / 3600 / 24)
  const hours = Math.floor(totalSeconds / 3600) % 24
  const mins = Math.floor(totalSeconds / 60) % 60
  const secs = Math.floor(totalSeconds) % 60

  daysEl.innerHTML = customFormatDate(days)
  hoursEl.innerHTML = customFormatDate(hours)
  minsEl.innerHTML = customFormatDate(mins)
  secsEl.innerHTML = customFormatDate(secs)
}

setInterval(countDown, 1000)

function customFormatDate(time) {
  return time < 10 ? `0${time}` : time
}