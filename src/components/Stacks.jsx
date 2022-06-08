import { Asset } from "./Asset"
import css from '../assets/css.svg'
import git from '../assets/git.svg'
import html from '../assets/html.svg'
import javascript from '../assets/javascript.svg'
import react from '../assets/react.svg'
import vite from '../assets/vite.svg'
import jest from '../assets/jest.svg'
import { useViewportScroll, motion, useTransform } from 'framer-motion'

export function Stacks() {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0, 0.9]);
  return (
    <section className="bg-white flex md:w-full justify-center dark:bg-gray-900">
      <div className="container px-6 py-10">
        
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Conheça minhas<span className="text-blue-500 ml-2">Habilidades</span></h1>
            
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <motion.div
              style={{ scale }}
            >
              <div className=" flex px-0 flex-col border-[1px] h-full bg-[#e0e0e0] border-gray-400 drop-shadow-[10px_10px_30px_#bebebe] shadow-[-10px_-10px_30px_#ffffff] dark:drop-shadow-[10px_10px_30px_#28364B] dark:shadow-[-10px_-10px_30px_#28364B] items-center p-6 space-y-3 text-center rounded-xl dark:bg-gray-800">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </span>

                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Bibliotecas</h1>
                <div className="grid grid-cols-2 items-center text-gray-800 gap-2 dark:text-white">
                  <Asset link={react} />
                  React
                </div>
              </div>
            </motion.div>
            <motion.div
                style={{ scale }}
              >
              <div className="flex flex-col border-[1px] h-full border-gray-400 items-center drop-shadow-[10px_10px_30px_#bebebe] shadow-[-10px_-10px_30px_#ffffff] dark:drop-shadow-[10px_10px_30px_#28364B] dark:shadow-[-10px_-10px_30px_#28364B] p-6 space-y-3 text-center bg-[#e0e0e0] rounded-xl dark:bg-gray-800">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </span>

                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Ferramentas</h1>
                <div className="grid grid-cols-2 gap-2 items-center text-gray-800 dark:text-white ">
                  <Asset link={git} />
                  Git
                  <Asset link={vite} />
                  Vite
                  <Asset link={jest} />
                  Jest
                </div>
              </div>
            </motion.div>

            <motion.div
                style={{ scale }}
              >
               <div className="flex flex-col items-center p-6 space-y-3 text-center border-[1px] border-gray-400 drop-shadow-[10px_10px_30px_#bebebe] shadow-[-10px_-10px_30px_#ffffff] dark:drop-shadow-[10px_10px_30px_#28364B] dark:shadow-[-10px_-10px_30px_#28364B] bg-[#e0e0e0] rounded-xl dark:bg-gray-800">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </span>

                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Linguagens</h1>
                <div className="grid grid-cols-2 gap-2 items-center dark:text-white text-gray-800">
                  <Asset link={javascript} />
                  JavaScript
                  <Asset link={html} />
                  Html5
                  <Asset link={css} />
                  Css3

                </div>
            </div>
            </motion.div>
          </div>
      </div>
    </section>
  )
}