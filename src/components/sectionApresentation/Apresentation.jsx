import profile from '../../assets/images/profile.jpg';
import { FiCoffee, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export const Apresentation = () => {
  return (
    <div className="sm:max-w-sm w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img className="object-cover object-center w-full h-56" src={profile} alt="foto de perfil" />
    
      <div className="flex items-center px-6 py-3 bg-gray-900">
        <FiCoffee className='text-white text-xl' />
        <h1 className="mx-3 text-lg font-semibold text-white">Victor Gabriel</h1>
      </div>

      <div className="px-6 py-4">
        <p className="py-2 text-gray-700 dark:text-gray-400">Desenvolvedor web Full Stack: Frontend/Backend</p>

        <div className="flex items-center mt-3 text-gray-700 dark:text-gray-200">
          <FiMapPin className='text-lg' />
          <h1 className="px-2 text-sm">Basil - Pernambuco</h1>
        </div>

        <div className="flex items-center mt-3 text-gray-700 dark:text-gray-200">
          <FiPhone className='text-lg' />
          <h1 className="px-2 text-sm">(81) 99671-7343</h1>
        </div>

        <div className="flex items-center mt-3 text-gray-700 dark:text-gray-200">
         <FiMail className='text-lg' />
          <h1 className="px-2 text-sm">gabrielvghs666@gmail.com</h1>
        </div>

      </div>
    </div>
  );
};
