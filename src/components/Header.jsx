import { FiDownload } from 'react-icons/fi'
import curriculum from '../assets/images/curriculum.jpeg';
export const Header = () => {
  return (
    <section className="sm:flex-row flex w-full items-center border-b-2 border-gray-200 flex-col text-gray-900 gap-4 md:gap-0 bg-white sm:justify-between p-5">
      <h1 className='text-2xl text-center lg:text-left sm:mb-0'>Olá 🖖, bem vindo ao meu perfil...  </h1>
      <div className=" md:flex-row flex-col flex gap-2 justify-center items-center cursor-pointer">
        <button className="text-gray-900 shadow-lg border-2 border-orange-400 p-2 md:text-lg rounded-lg">Entrar em contato</button>
        <a href={curriculum} download className="flex shadow-lg justify-center items-center gap-2 text-white md:text-lg bg-orange-400 p-[.6rem] rounded-lg "><FiDownload /> Baixar currículo</a>
      </div>
    </section>
  );
};
