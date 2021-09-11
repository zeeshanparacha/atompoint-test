export const totalHours = (data) => {
  const value = data.reduce((previousValue, curr) => {
    let time = curr?.hoursWorked;
    let splitTime = time.split(":")
    let hour = splitTime[0]?.replace(/\D/g, '') || 0
    let minutes = splitTime[1]?.replace(/\D/g, '') / 60 || 0
    let totalHours = Number(hour) + Number(minutes)
    return previousValue + totalHours
  }, 0)
  return value?.toFixed(2)
}