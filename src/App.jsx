import { useState } from 'react';
import { Header } from './components/Header';
import { GroupAnalytcs } from './components/sectionApresentation/GroupAnalytcs';
import { Apresentation } from "./components/sectionApresentation/Apresentation";
import { GroupByCertificated } from './components/sectionCertified/groupByCertificated';
import { SkillsCollections } from './components/sectionLangs/SkillsCollections';
import { ProjectsMostBeRelevants } from './components/ProjectsMostBeRelevants';
import { Modal } from './components/Modal';
import { Footer } from './components/footer';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <main className="font-sans w-full min-h-screen bg-orange-400">
      <Modal 
      isOpen={isOpen}
      closeModal={closeModal}
      />
      <div className='w-full flex flex-col bg-gray-100 items-center'>
        <section className="lg:w-2/3 w-full">
          <Header 
            openModal={openModal}
          />
        </section>
        <section className="lg:w-2/3 w-full py-10 md:gap-0 gap-5 flex flex-col md:flex-row justify-between items-center">
          <section className='md:w-1/2 w-full'>
            <Apresentation />
          </section>
          <section className='flex md:w-1/2 w-full'>
            <GroupAnalytcs />
          </section>
        </section>
      </div>
      <section className='w-full flex flex-col items-center'>
        <section className='md:w-2/3 w-full py-10 md:flex-row'>
          <h2 id='certificados' className='text-3xl font-semibold text-center text-gray-900'>Meus Certificados</h2>
          <section className='py-10 flex flex-wrap lg:justify-between w-full justify-center gap-8'>
            <GroupByCertificated />
          </section>
        </section>
      </section>
      <section className='w-full flex flex-col items-center bg-gray-200'>
        <div className='lg:w-2/3 w-full flex flex-col items-center'>
          <h2 id='skills' className='text-gray-900 mx-4 text-3xl py-10 font-semibold'>Linguagens e ferramentas</h2>
          <SkillsCollections />
        </div>
      </section>
      <section className='w-full flex flex-col items-center'>
        <div className='lg:w-2/3 w-full py-4 flex flex-col items-center'>
          <h2 id='projetos' className='mb-6 text-gray-900 mx-4 text-3xl font-semibold'>Projetos mais relevantes</h2>
          <div className=' md:flex-row w-full md:justify-between'>
            <ProjectsMostBeRelevants />
          </div>
        </div>
      </section>
      <Footer
        openModal={openModal}
      />
    </main>
  )
}

export default App
