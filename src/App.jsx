import PageVisible from './routes/routes'
import { getLocalStorage } from './helpers';
function App() {
  let theme = getLocalStorage();
  const getHtmlTag = document.querySelector('html');
  getHtmlTag.className = theme
  
  return <PageVisible />
}

export default App
