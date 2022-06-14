import PageVisible from './routes/routes'
import { getLocalStorage } from './helpers';
function App() {
  let theme = getLocalStorage();
  console.log(theme)
  const getHtmlTag = document.querySelector('html');
  getHtmlTag.className = theme
  
  return (
    <div className='overflow-x-hidden'>
      <PageVisible />
    </div>
  )
}

export default App
