import { Navigation } from './Navigation';
export const Header = ({openModal}) => {
  return (
    <section className="sm:flex-row flex w-full  border-b-2 border-gray-200 flex-col text-gray-900 gap-4 md:gap-0 bg-white sm:justify-between p-5">
      <h1 className='text-2xl text-center lg:text-left sm:mb-0'>Olá 🖖, bem vindo ao meu perfil...  </h1>
      <Navigation />
    </section>
  );
};
