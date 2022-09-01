import { FiDownload } from 'react-icons/fi'
import curriculum from '../assets/images/curriculum.jpeg';
import { toast } from 'react-hot-toast';

export const Footer = ({openModal}) => {
  return (
    <footer className='w-full flex flex-col gap-10 bg-white p-10' id='contactUs'>
      <h2 className='text-center text-3xl text-semibold'>Entre em contato comigo !</h2>
      <div className=" md:flex-row flex-col flex gap-3 justify-center items-center cursor-pointer">
        <button 
          onClick={openModal}
          className="text-gray-900 shadow-lg hover:scale-105 transition border-2 border-orange-400 p-2 md:text-lg rounded-lg"
        >
          Entrar em contato
        </button>
        <a onClick={() => toast.success('currículo enviado')} href={curriculum} download className="flex hover:scale-105 transition shadow-lg justify-center items-center gap-2 text-white md:text-lg bg-orange-400 p-[.6rem] rounded-lg "><FiDownload /> Baixar currículo</a>
      </div>
    </footer>
  )
}