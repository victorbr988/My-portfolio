export const setLocalStorage = (darkTheme) => {
  localStorage.setItem('PreferTheme', darkTheme)
}

export const getLocalStorage = () => {
  const theme = localStorage.getItem('PreferTheme')
  return theme
}