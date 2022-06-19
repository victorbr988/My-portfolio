import {render, screen} from '@testing-library/react'
import App from '../App'

describe('teste para o arquivo App do projeto', () => {
  it('testa se a página home possui um navbar com os links de navegação', () => {
    render(<App />)
  })

})