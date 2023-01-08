const DATE_OPTIONS = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-GB', DATE_OPTIONS)
}
