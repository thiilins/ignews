const dateFormat = () => {
  const today = new Intl.DateTimeFormat('fr-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(Date.now())
  const countDaysInterval = (dateInitial: string) => {
    const now = new Date(today)
    const past = new Date(dateInitial)
    const diff = Math.abs(now.getTime() - past.getTime())
    return Math.ceil(diff / (1000 * 60 * 60 * 24)).toString()
  }
  const formatDate = (
    value: string | number,
    locale = 'pt-BR',
    options?: Intl.DateTimeFormatOptions
  ) => {
    value = value.toString().slice(0, 10)
    const config = new Intl.DateTimeFormat(locale, { ...options })
    return config.format(new Date(`${value} 00:00:00`))
  }

  return {
    formatDate,
    countDaysInterval,
    today
  }
}

export default dateFormat
