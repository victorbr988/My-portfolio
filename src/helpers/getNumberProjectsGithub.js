export const getNumberProjectsGithub = async () => {
  try {
    const response = await fetch('https://api.github.com/users/victorbr988');
    const responseJson = await response.json()
    
    return responseJson;
  } catch(error) {
    console.log(error.message)
    return `Erro: ${error.message}`
  }
}