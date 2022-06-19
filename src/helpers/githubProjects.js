import trivia from '../assets/images/trivia.jpeg'
import imageTest from '../assets/images/imageTest.jpeg'
import shoppingOnline from '../assets/images/shopping-online.png'
export const githubProjects = [
  {
    id: Date(),
    Category: 'React',
    title: 'Trivia',
    description: 'Jogo de trivia, no famoso estilo perguntas e respostas, projeto desenvolvido em grupo.',
    image: trivia,
    Web: 'https://jogo-de-trivia-rho.vercel.app/',
    github: 'https://github.com/victorbr988/Jogo-de-Trivia'
  },
  {
    id: Date(),
    Category: 'Teste',
    title: 'Testes unitários',
    description: 'Projeto com testes unitários para iniciantes em javaScipt consguirem praticar lógica',
    image: imageTest,
    Web: '',
    github: 'https://github.com/victorbr988/Pratique-js'
  },
  {
    id: Date(),
    Category: 'Vanilla',
    title: 'Shopping online',
    description: 'Primeiro Projeto desenvolvido consumindo API do mercado Livre',
    image: shoppingOnline,
    Web: 'https://victorbr988.github.io/Shopping-Online/',
    github: 'https://github.com/victorbr988/Shopping-Online'
  }
]