import { useState } from 'react';
import profile2 from '../assets/images/portfolio.png';
import { LinkNavigation } from './LinkNavigation';
import { PopupTheme } from './PopupTheme';

export const Navbar = () => {
  const [visibility, setVisibility] = useState(false)
  return (
    <nav className="bg-white shadow z-50 fixed w-full dark:bg-gray-800">
        <div className="px-6 py-4">
            <div className="md:flex items-center md:justify-between">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-semibold text-gray-700">
                        <h2 className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl">Bem vindo</h2>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button 
                          onClick={() => setVisibility((prevState) => prevState = !visibility)}
                          type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu open: "block", Menu closed: "hidden"  */}
                <div className={`${visibility === true ?  'flex-col': 'hidden'} flex-1 md:flex items-center md:justify-between`}>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:mx-8">
                        <LinkNavigation href="/">Home</LinkNavigation>
                        <LinkNavigation href="/work">Trabalhos</LinkNavigation>
                        <PopupTheme />
                        
                    </div>

                    <div className="flex items-center mt-4 md:mt-0">
                        <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                            <img src={profile2} className=" w-12 md:w-22 md:h-22 rounded-full h-12" alt="avatar" />

                            <h3 className="mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 md:hidden">Victor Gabriel</h3>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}