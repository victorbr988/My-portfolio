export const setLocalStorage = (darkTheme = 'ligth') => {
  localStorage.setItem('PreferTheme', darkTheme)
}

export const getLocalStorage = () => {
  const theme = localStorage.getItem('PreferTheme')
  return theme
}