const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-GB', DATE_OPTIONS)
}
