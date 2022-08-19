import { Certified } from './Certified';
import trybeImage from '../../assets/images/trybe.png'

export const GroupByCertificated = () => {
  return (
    <>
      <Certified 
        title='Fundamentos do desenvolvimento web'
        src={trybeImage} 
        description='Aplicando de forma prática conteúdos como: Unix & Bash, Git, JS Básico & DOM, HTML, CSS, JS ES6, Higher Order Functions e Testes Unitários, assim como metodologias ágeis e habilidades comportamentais.'
        link='https://api.accredible.com/v1/auth/invite?code=7251a60c89cc8caf81c4&credential_id=d80f842e-f613-4348-b350-323039dc7d7b&url=https%3A%2F%2Fwww.credential.net%2Fd80f842e-f613-4348-b350-323039dc7d7b&ident=64957de2369ddfd2077929862cc6098c186cb75b'
      />
      <Certified
        title='Desenvolvimento Front-end'
        src={trybeImage} 
        description='Aborda conteúdos relacionados a desenvolvimento Front-end, React, incluindo Componentes, Estado e Eventos, Componentes Controlados, Ciclo de Vida, Router, Testes com RTL, Redux com React, Context API, React Hooks, metodologias ágeis e habilidades comportamentais.'
        link='https://api.accredible.com/v1/auth/invite?code=7251a60c89cc8caf81c4&credential_id=d80f842e-f613-4348-b350-323039dc7d7b&url=https%3A%2F%2Fwww.credential.net%2Fd80f842e-f613-4348-b350-323039dc7d7b&ident=64957de2369ddfd2077929862cc6098c186cb75b'
      />
      <Certified
        title='SQL - Basic'
        src={'https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png'} 
        description='Um desafio onde foi preciso criar querys para buscar informações de um banco de dados'
        link='https://www.hackerrank.com/certificates/aa701e914539'
      />
    </>
  );
};
