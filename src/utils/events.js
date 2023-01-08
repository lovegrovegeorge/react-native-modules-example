export const groupEventsByDay = (events) => {
  const days = {}

  events.forEach((event) => {
    const thisDay = new Date(event.starts).toLocaleDateString('en-GB')

    if (days[thisDay]) {
      days[thisDay].push(event)
    } else {
      days[thisDay] = [event]
    }
  })
  return days
}
