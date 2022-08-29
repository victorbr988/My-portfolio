import { FiDownload } from 'react-icons/fi'
import curriculum from '../assets/images/curriculum.jpeg';
import { toast } from 'react-hot-toast';

export const Header = () => {
  return (
    <section className="sm:flex-row flex w-full items-center border-b-2 border-gray-200 flex-col text-gray-900 gap-4 md:gap-0 bg-white sm:justify-between p-5">
      <h1 className='text-2xl text-center lg:text-left sm:mb-0'>Olá 🖖, bem vindo ao meu perfil...  </h1>
      <nav className='gap-4 flex border-2 border-orange-400 rounded-lg'>
        <a className='text-gray-900 p-2 rounded-lg hover:scale-105 transition' href="#certificados">Certificados</a>
        <a className='text-gray-900 p-2 rounded-lg hover:scale-105 transition' href="#skills">Skills</a>
        <a className='text-gray-900 p-2 rounded-lg hover:scale-105 transition' href="#projetos">Projetos</a>
      </nav>
      <div className=" md:flex-row flex-col flex gap-3 justify-center items-center cursor-pointer">
        <button 
          onClick={() => toast.error('Trabalhando nisso 🚧')}
          className="text-gray-900 shadow-lg hover:scale-105 transition border-2 border-orange-400 p-2 md:text-lg rounded-lg"
        >
          Entrar em contato
        </button>
        <a onClick={() => toast.success('currículo enviado')} href={curriculum} download className="flex hover:scale-105 transition shadow-lg justify-center items-center gap-2 text-white md:text-lg bg-orange-400 p-[.6rem] rounded-lg "><FiDownload /> Baixar currículo</a>
      </div>
    </section>
  );
};
