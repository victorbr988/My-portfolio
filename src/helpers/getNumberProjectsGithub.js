export const getNumberProjectsGithub = async () => {
  const response = await fetch('https://api.github.com/users/victorbr988');
  const responseJson = await response.json()
  
  return responseJson;
}